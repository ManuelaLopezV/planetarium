"use client";

import { usePlanetStore } from "@/store/planets";
import { getSpanishPlanetName, planetNamesInSpanish } from "../utils";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

interface PlanetCardProps {
  planet: {
    id: string;
    englishName: string;
    name: string;
    image: string;
  };
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

// Función para buscar planeta por nombre en español
export const findPlanetBySpanishName = (spanishName: string): string => {
  const normalizedName = spanishName.toLowerCase();
  const englishName = Object.entries(planetNamesInSpanish).find(
    ([_, spanish]) => spanish.toLowerCase() === normalizedName
  )?.[0];
  return englishName || spanishName;
};

function PlanetCard({ planet, onClick }: PlanetCardProps) {
  const spanishName = getSpanishPlanetName(planet.englishName);
  const { favoritePlanet } = usePlanetStore();
  return (
    <div
      className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer border-s-gray-500 hover:bg-gray-700 transition duration-200 w-[400px] h-[400px]"
      onClick={onClick}
    >
      <img
        src={planet.image}
        alt={spanishName}
        className="w-full h-[90%] object-cover rounded-lg mb-2"
      />
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-semibold">{spanishName}</h2>
        {favoritePlanet === planet.englishName ? (
          <GoHeartFill size={24} className="text-red-500" />
        ) : (
          <GoHeart size={24} className="text-white" />
        )}
      </div>
    </div>
  );
}

export { PlanetCard };
