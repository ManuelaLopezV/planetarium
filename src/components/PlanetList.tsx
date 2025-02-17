"use client";
import React from "react";
import { PlanetCard } from "./PlanetCard";
import { useRouter } from "next/navigation";
import { Planet } from "@/types";

// Componente PlanetList que muestra una lista de planetas usando el componente PlanetCard
interface PlanetListProps {
  planets: Planet[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  const router = useRouter();

  // Función que maneja el click en un planeta y redirige a la página de detalles
  const onPlanetClick = (id: string) => {
    router.push(`/planet-detail/${id}`);
  };

  return (
    <div className="flex flex-col gap-10 mt-5 border border-gray-800 rounded-lg p-4 sm:gap-8 lg:gap-16 lg:flex-row">
      {planets.map((planet) => (
        <PlanetCard
          key={planet.id}
          planet={planet}
          onClick={() => onPlanetClick(planet.id)}
        />
      ))}
    </div>
  );
};

export { PlanetList };
