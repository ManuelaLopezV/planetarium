// Objeto para mapear nombres de planetas de inglés a español
export const planetNamesInSpanish: { [key: string]: string } = {
  Mercury: "Mercurio",
  Venus: "Venus",
  Earth: "Tierra",
  Mars: "Marte",
  Jupiter: "Júpiter",
  Saturn: "Saturno",
  Uranus: "Urano",
  Neptune: "Neptuno",
  Pluto: "Plutón",
  Sun: "Sol",
  Moon: "Luna",
};

export const planetImages: Record<string, string> = {
  Mercury:
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mercury_Globe-MESSENGER_mosaic_centered_at_0degN-0degE.jpg",
  Venus:
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
  Earth:
    "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
  Mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  Jupiter:
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
  Saturn:
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  Uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  Neptune:
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
};

// Función para obtener el nombre en español
export const getSpanishPlanetName = (englishName: string): string => {
  return planetNamesInSpanish[englishName] || englishName;
};

export const getPlanetImage = (planetName: string): string => {
  return planetImages[planetName] || "https://via.placeholder.com/150";
};
