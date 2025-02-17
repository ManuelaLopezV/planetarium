/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchInput } from "@/components/SearchInput";
import { PlanetSort } from "@/components/PlanetSort";
import { PlanetList } from "@/components/PlanetList";
import { Pagination } from "@/components/Pagination";
import { Planet, solarSystemOrder } from "@/types";
import { getSpanishPlanetName, getPlanetImage } from "@/utils";
import { getPlanets } from "../actions/planets";

function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [planets, setPlanets] = useState<Planet[]>([]);
  const [planetsOriginal, setPlanetsOriginal] = useState<Planet[]>([]);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [totalPages, setTotalPages] = useState(0);
  const [sortOrder, setSortOrder] = useState(
    searchParams.get("sort") || "original"
  );
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const itemsPerPage = 2;

  // Cargar datos iniciales
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlanets();
      const planetsWithSpanishNames = data.map((planet) => ({
        ...planet,
        name: getSpanishPlanetName(planet.englishName),
        image: getPlanetImage(planet.englishName),
      }));

      // Ordenar inicialmente según el orden del sistema solar
      const initialSortedPlanets = [...planetsWithSpanishNames].sort((a, b) => {
        const indexA = solarSystemOrder.indexOf(a.name);
        const indexB = solarSystemOrder.indexOf(b.name);
        return indexA - indexB;
      });

      setPlanetsOriginal(initialSortedPlanets);
      applyFiltersAndSort(initialSortedPlanets, search, sortOrder, currentPage);
    };

    fetchData();
  }, []);

  // Función para aplicar filtros y ordenamiento
  const applyFiltersAndSort = (
    allPlanets: Planet[],
    searchTerm: string,
    order: string,
    page: number
  ) => {
    // Primero filtrar
    let filteredPlanets = allPlanets;
    if (searchTerm) {
      filteredPlanets = allPlanets.filter((planet) =>
        planet.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Luego ordenar
    const sortedPlanets = [...filteredPlanets];
    if (order === "original") {
      sortedPlanets.sort((a, b) => {
        const indexA = solarSystemOrder.indexOf(a.name);
        const indexB = solarSystemOrder.indexOf(b.name);
        // Si algún planeta no está en solarSystemOrder, ponerlo al final
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
      });
    } else {
      sortedPlanets.sort((a, b) =>
        order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    }

    // Actualizar total de páginas
    setTotalPages(Math.ceil(sortedPlanets.length / itemsPerPage));

    // Aplicar paginación
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPlanets(sortedPlanets.slice(start, end));
  };

  // Manejar cambios en la búsqueda
  useEffect(() => {
    if (planetsOriginal.length) {
      applyFiltersAndSort(planetsOriginal, search, sortOrder, currentPage);
      updateURL();
    }
  }, [search, currentPage]);

  // Manejar cambios en el ordenamiento
  useEffect(() => {
    if (planetsOriginal.length) {
      applyFiltersAndSort(planetsOriginal, search, sortOrder, 1);
      setCurrentPage(1);
      updateURL();
    }
  }, [sortOrder]);

  // Actualizar URL
  const updateURL = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (sortOrder && sortOrder !== "original") params.set("sort", sortOrder);
    if (currentPage > 1) params.set("page", currentPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="text-white py-16 px-5 flex flex-col items-center justify-center lg:gap-4">
      <div className="flex flex-col gap-4 mt-6 mb-4 lg:flex-row lg:mt-0">
        <SearchInput search={search} onSearchChange={setSearch} />
        <PlanetSort sortOrder={sortOrder} onSortChange={setSortOrder} />
      </div>

      <PlanetList planets={planets} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export { Home };
