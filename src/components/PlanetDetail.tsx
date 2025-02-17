"use client";
import { FC } from "react";
import { getPlanetImage, getSpanishPlanetName } from "../utils";
import { Planet } from "../types";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { usePlanetStore } from "@/store/planets";

const PlanetDetail: FC<{ planet: Planet }> = ({
  planet,
}: {
  planet: Planet;
}) => {
  const { favoritePlanet, setFavoritePlanet } = usePlanetStore();

  return (
    <section className="w-[70%] min-h-[60%] h-auto flex flex-col md:flex-row bg-gradient-to-r bg-white opacity-80 shadow-lg p-6 rounded-lg">
      <article className="md:w-1/2 flex justify-center items-center">
        <img
          src={getPlanetImage(planet.englishName)}
          alt={planet.englishName}
          className="object-contain"
        />
      </article>
      <article className="md:w-1/2 p-4 text-black flex flex-col items-center justify-between">
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-4">
            {getSpanishPlanetName(planet.englishName)}
          </h2>
          <p className="mb-2">
            <strong>Descripción:</strong> {planet.gravity}
          </p>
          <p className="mb-2">
            <strong>Masa:</strong> {planet.mass?.massValue} kg
          </p>
          <p className="mb-2">
            <strong>Radio medio:</strong> {planet.meanRadius} km
          </p>
          <p className="mb-2">
            <strong>Densidad:</strong> {planet.density} g/cm³
          </p>
          <p className="mb-2">
            <strong>Gravedad:</strong> {planet.gravity} m/s²
          </p>
          <p className="mb-2">
            <strong>Temperatura:</strong> {planet.avgTemp} K
          </p>
          <p className="mb-2">
            <strong>Distancia al sol:</strong> {planet.semimajorAxis} km
          </p>
          <p className="mb-2">
            <strong>Inclinación:</strong> {planet.inclination}°
          </p>
          <p className="mb-2">
            <strong>Número de lunas:</strong>{" "}
            {planet.moons ? planet.moons.length : 0}
          </p>
          <p className="mb-2">
            <strong>Descubierto por:</strong> {planet.discoveredBy}
          </p>
          <p className="mb-2">
            <strong>Fecha de descubrimiento:</strong> {planet.discoveryDate}
          </p>
        </section>
        <section className="w-full">
          {favoritePlanet === planet.englishName ? (
            <button
              className="w-full bg-gray-800 text-white p-4 flex text-center items-center justify-center rounded-lg hover:bg-black transition-all duration-300"
              onClick={() => setFavoritePlanet("")}
            >
              Desmarcar como favorito
              <GoHeartFill size={20} className="ml-2" />
            </button>
          ) : (
            <button
              className="w-full bg-black text-white p-4 flex text-center items-center justify-center rounded-lg hover:bg-gray-800 transition-all duration-300"
              onClick={() => setFavoritePlanet(planet.englishName)}
            >
              Seleccionar como favorito
              <GoHeart size={20} className="ml-2" />
            </button>
          )}
        </section>
      </article>
    </section>
  );
};

export { PlanetDetail };
