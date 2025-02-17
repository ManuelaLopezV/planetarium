import { Planet } from "@/types";

const API_URL = "https://api.le-systeme-solaire.net/rest/bodies/";
// const API_URL = "https://www.api-ninjas.com/api/planets";

// Función para obtener la lista de planetas desde la API
export const getPlanets = async (): Promise<Planet[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error obteniendo datos de los planetas"); // Verifica si la respuesta es exitosa, de lo contrario, lanza un error

    const data = await response.json();
    return data.bodies.filter((body: Planet) => body.isPlanet); // Filtra los resultados para incluir solo los objetos que sean planetas
  } catch (error) {
    console.error("Error fetching planets:", error); // Captura y muestra en consola cualquier error durante la solicitud
    return [];
  }
};

// Función para obtener los detalles de un planeta específico por su ID
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
