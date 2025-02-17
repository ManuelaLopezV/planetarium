"use client";

import { motion } from "framer-motion";
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
    <motion.div
      className="bg-gray-800 w-[300px] h-[300px] p-6 sm:w-[400px] sm:h-[400px] rounded-lg shadow-lg cursor-pointer border-gray-500 hover:bg-gray-700"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }} // Animación de entrada
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
      }} // Efecto al pasar el mouse
    >
      <motion.img
        src={planet.image}
        alt={spanishName}
        className="w-full h-[90%] object-cover rounded-lg mb-2"
        whileHover={{ scale: 1.1 }} // Efecto de zoom al pasar el mouse
        transition={{ duration: 0.3 }}
      />
      <div className="w-full flex justify-between items-center">
        <h2 className="text-lg font-semibold lg:text-xl">{spanishName}</h2>
        {favoritePlanet === planet.englishName ? (
          <GoHeartFill size={24} className="text-red-500" />
        ) : (
          <GoHeart size={24} className="text-white" />
        )}
      </div>
    </motion.div>
  );
}

export { PlanetCard };
