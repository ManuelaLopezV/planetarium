"use client";
import React from "react";
import { PlanetCard } from "./PlanetCard";
import { useRouter } from "next/navigation";

interface PlanetListProps {
  planets: any[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  const router = useRouter();

  const onPlanetClick = (id: string) => {
    router.push(`/planet-detail/${id}`);
  };

  return (
    <div className="flex gap-8 border border-gray-800 rounded-lg p-4">
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
