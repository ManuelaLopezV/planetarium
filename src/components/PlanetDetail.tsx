"use client";
import { FC } from "react";
import { getPlanetImage, getSpanishPlanetName } from "../utils";
import { Planet } from "../types";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { usePlanetStore } from "@/store/planets";
import Image from "next/image";

// Componente PlanetDetail que muestra los detalles de un planeta
const PlanetDetail: FC<{ planet: Planet }> = ({
  planet,
}: {
  planet: Planet;
}) => {
  const { favoritePlanet, setFavoritePlanet } = usePlanetStore();

  return (
    <section className="w-[70%] min-h-[60%] h-auto flex flex-col bg-gradient-to-r bg-white opacity-80 shadow-lg p-6 rounded-lg md:w-[60%] lg:w-[50%] xl:flex-row xl:w-[70%]">
      <article className="flex justify-center items-center">
        <Image
          width={500}
          height={500}
          src={getPlanetImage(planet.englishName)}
          alt={planet.englishName}
          className="object-contain w-[85%] sm:w-[70%] lg:w-[60%] xl:w-[75%]"
        />
      </article>
      <article className="p-4 text-black flex flex-col items-center justify-between">
        <section className="w-full">
          <h2 className="text-2xl text-center font-bold mb-4 sm:text-3xl">
            {getSpanishPlanetName(planet.englishName)}
          </h2>
          {/* Información del detalle de cada planeta */}
          <div className="sm:pl-10 xl:pl-0">
            <p className="text-sm my-2 sm:text-lg">
              <strong>Masa:</strong> {planet.mass?.massValue} kg
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Radio medio:</strong> {planet.meanRadius} km
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Densidad:</strong> {planet.density} g/cm³
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Gravedad:</strong> {planet.gravity} m/s²
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Temperatura:</strong> {planet.avgTemp} K
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Distancia al sol:</strong> {planet.semimajorAxis} km
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Inclinación:</strong> {planet.inclination}°
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Número de lunas:</strong>{" "}
              {planet.moons ? planet.moons.length : 0}
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Descubierto por:</strong> {planet.discoveredBy}
            </p>
            <p className="text-sm my-2 sm:text-lg">
              <strong>Fecha de descubrimiento:</strong> {planet.discoveryDate}
            </p>
          </div>
        </section>
        <section className="flex w-full pt-5 justify-center sm:text-lg sm:w-[90%]">
          {favoritePlanet === planet.englishName ? (
            <button
              className="w-full bg-gray-800 text-white  p-4 flex text-center items-center justify-center rounded-lg hover:bg-black transition-all duration-300"
              onClick={() => setFavoritePlanet("")}
            >
              Desmarcar como favorito
              <GoHeartFill size={20} className="ml-2" />
            </button>
          ) : (
            <button
              className="w-[90%] lg:w-full bg-black text-white p-4 flex text-center items-center justify-center rounded-lg hover:bg-gray-800 transition-all duration-300"
              onClick={() => setFavoritePlanet(planet.englishName)}
            >
              Seleccionar como favorito
              <GoHeart size={30} className="ml-2" />
            </button>
          )}
        </section>
      </article>
    </section>
  );
};

export { PlanetDetail };
