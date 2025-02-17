export interface Planet {
  id: string;
  englishName: string;
  name: string;
  mass?: { massValue: number };
  meanRadius?: number;
  density?: number;
  gravity?: number;
  avgTemp?: number;
  semimajorAxis?: number;
  inclination?: number;
  moons?: { moon: string }[];
  isPlanet?: boolean;
  discoveredBy?: string;
  discoveryDate?: string;
}

export const solarSystemOrder = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Jupiter",
  "Saturno",
  "Urano",
  "Neptuno",
];
