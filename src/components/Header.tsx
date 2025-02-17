"use client";
import { usePlanetStore } from "@/store/planets";
import { getSpanishPlanetName } from "../utils";

function Header() {
  const { favoritePlanet } = usePlanetStore();
  return (
    <header className="absolute top-0 left-0 right-0 lg:z-20 w-full h-[110px] lg:h-[100px] px-4 py-10 bg-white text-black p-4 opacity-90 flex flex-col items-center justify-center">
      <h1 className="font-machinery text-5xl pt-4 xl:text-6xl font-bold text-center">
        Planetarium
      </h1>
      <h2 className="relative pt-3 sm:text-lg lg:absolute lg:right-0 lg:mr-10">
        Planeta favorito:{" "}
        <strong>{getSpanishPlanetName(favoritePlanet)}</strong>
      </h2>
    </header>
  );
}

export { Header };
