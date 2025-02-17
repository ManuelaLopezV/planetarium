import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PlanetStore = {
  favoritePlanet: string;
  setFavoritePlanet: (planet: string) => void;
  getFavoritePlanet: () => string;
};

export const usePlanetStore = create<PlanetStore>()(
  persist(
    (set, get) => ({
      favoritePlanet: "Earth",
      setFavoritePlanet: (planet) => set({ favoritePlanet: planet }),
      getFavoritePlanet: () => get().favoritePlanet,
    }),
    {
      name: "planet-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
