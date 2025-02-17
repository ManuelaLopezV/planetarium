"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getDummyPlanets, getPlanets } from "../actions/planets";
import { SearchInput } from "@/components/SearchInput";
import { PlanetSort } from "@/components/PlanetSort";
import { PlanetList } from "@/components/PlanetList";
import { Pagination } from "@/components/Pagination";
import { solarSystemOrder } from "@/types";
import { getPlanetImage } from "@/utils";

function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [planets, setPlanets] = useState<any[]>([]);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [sortOrder, setSortOrder] = useState(searchParams.get("sort") || "asc");
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const itemsPerPage = 2; // Mostrar 4 planetas por página

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDummyPlanets();
      const planetsWithImages = data.map((planet) => ({
        ...planet,
        image: getPlanetImage(planet.englishName),
      }));
      setPlanets(planetsWithImages);
    };

    fetchData();
  }, []);

  //Buscar planetas
  const filteredPlanets = planets.filter((planet) =>
    planet.englishName.toLowerCase().includes(search.toLowerCase())
  );

  //Ordenar planetas
  let sortedPlanets = [];
  if (sortOrder === "original") {
    sortedPlanets = solarSystemOrder
      .map((planetName) =>
        filteredPlanets.find((planet) => planet.englishName === planetName)
      )
      .filter((planet) => planet !== undefined);
  } else {
    sortedPlanets = filteredPlanets.sort((a, b) =>
      sortOrder === "asc"
        ? a.englishName.localeCompare(b.englishName)
        : b.englishName.localeCompare(a.englishName)
    );
  }

  // Paginación
  const totalPages = Math.ceil(filteredPlanets.length / itemsPerPage);
  const displayedPlanets = filteredPlanets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Actualizar la URL cuando cambian los filtros
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    params.set("sort", sortOrder);
    params.set("page", currentPage.toString());

    router.push(`/?${params.toString()}`, { scroll: false });
  }, [search, sortOrder, currentPage, router]);

  return (
    <section className="h-[100vh] text-white p-4 flex flex-col items-center justify-center">
      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <SearchInput search={search} onSearchChange={setSearch} />
        <PlanetSort
          sortOrder={sortOrder}
          onSortChange={(value) => setSortOrder(value)}
        />
      </div>

      {/* Lista de planetas */}
      <PlanetList planets={displayedPlanets} />

      {/* Paginación */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}

export { Home };
