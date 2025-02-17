"use client";
import { usePlanetStore } from "@/store/planets";
import { getSpanishPlanetName } from "../utils";

function Header() {
  const { favoritePlanet } = usePlanetStore();
  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full h-[80px] px-4 py-2 bg-white text-black p-4 opacity-90 flex items-center justify-center">
      <h1 className="font-machinery text-5xl font-bold text-center">
        Planetarium
      </h1>
      <h2 className="absolute right-0 mr-10">
        Planeta favorito:{" "}
        <strong>{getSpanishPlanetName(favoritePlanet)}</strong>
      </h2>
    </header>
  );
}

export { Header };
