import { Planet } from "@/types";
import { PLANETS } from "@/utils/mockAPI";

const API_URL = "https://api.le-systeme-solaire.net/rest/bodies/";
// const API_URL = "https://www.api-ninjas.com/api/planets";

export const getPlanets = async (): Promise<Planet[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error obteniendo datos de los planetas");

    const data = await response.json();
    return data.bodies.filter((body: Planet) => body.isPlanet);
  } catch (error) {
    console.error("Error fetching planets:", error);
    return [];
  }
};

export const getDummyPlanets = async (): Promise<Planet[]> => {
  return PLANETS;
};

export const getDummyPlanetDetails = async (
  planetId: string
): Promise<Planet | null> => {
  return PLANETS.find((planet) => planet.id === planetId) || null;
};

export const getPlanetDetails = async (
  planetId: string
): Promise<Planet | null> => {
  try {
    const response = await fetch(`${API_URL}${planetId}`);
    if (!response.ok) throw new Error("Error obteniendo detalles del planeta");

    return await response.json();
  } catch (error) {
    console.error("Error fetching planet details:", error);
    return null;
  }
};
