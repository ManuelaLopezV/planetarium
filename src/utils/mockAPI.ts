import { Planet } from "@/types";

export const PLANETS = [
  {
    id: "1",
    englishName: "Mercury",
    name: "Mercurio",
    mass: { massValue: 3.285e23 },
    meanRadius: 2439.7,
    density: 5.427,
    gravity: 3.7,
    avgTemp: 440,
    semimajorAxis: 57910000,
    inclination: 7,
    moons: [],
    isPlanet: true,
    discoveredBy: "Sumerios",
    discoveryDate: "Antigüedad",
    image: "/images/mercury.jpg",
  },
  {
    id: "2",
    englishName: "Venus",
    name: "Venus",
    mass: { massValue: 4.867e24 },
    meanRadius: 6051.8,
    density: 5.243,
    gravity: 8.87,
    avgTemp: 737,
    semimajorAxis: 108200000,
    inclination: 3.39,
    moons: [],
    isPlanet: true,
    discoveredBy: "Sumerios",
    discoveryDate: "Antigüedad",
    image: "/images/venus.jpg",
  },
  {
    id: "3",
    englishName: "Earth",
    name: "Tierra",
    mass: { massValue: 5.972e24 },
    meanRadius: 6371,
    density: 5.513,
    gravity: 9.81,
    avgTemp: 288,
    semimajorAxis: 149600000,
    inclination: 0,
    moons: [{ moon: "Luna" }],
    isPlanet: true,
    discoveredBy: "Sumerios",
    discoveryDate: "Antigüedad",
    image: "/images/earth.jpg",
  },
  {
    id: "4",
    englishName: "Mars",
    name: "Marte",
    mass: { massValue: 6.39e23 },
    meanRadius: 3389.5,
    density: 3.933,
    gravity: 3.71,
    avgTemp: 210,
    semimajorAxis: 227900000,
    inclination: 1.85,
    moons: [{ moon: "Fobos" }, { moon: "Deimos" }],
    isPlanet: true,
    discoveredBy: "Sumerios",
    discoveryDate: "Antigüedad",
    image: "/images/mars.jpg",
  },
  {
    id: "5",
    englishName: "Jupiter",
    name: "Júpiter",
    mass: { massValue: 1.898e27 },
    meanRadius: 69911,
    density: 1.326,
    gravity: 24.79,
    avgTemp: 165,
    semimajorAxis: 778500000,
    inclination: 1.305,
    moons: [
      { moon: "Metis" },
      { moon: "Adrastea" },
      { moon: "Amalthea" },
      { moon: "Tebe" },
      { moon: "Io" },
      { moon: "Europa" },
      { moon: "Ganimedes" },
      { moon: "Calisto" },
      { moon: "Leda" },
      { moon: "Himalia" },
      { moon: "Lisitea" },
      { moon: "Elara" },
      { moon: "Dia" },
      { moon: "Carpo" },
      { moon: "Valetudo" },
      { moon: "Euporia" },
      { moon: "Eupheme" },
      { moon: "Sponde" },
      { moon: "Autonoe" },
      { moon: "Cale" },
      { moon: "Pasithee" },
      { moon: "Megaclite" },
      { moon: "Taygete" },
      { moon: "Chaldene" },
      { moon: "Harpalyke" },
      { moon: "Kalyke" },
      { moon: "Iocaste" },
      { moon: "Erinome" },
      { moon: "Isonoe" },
      { moon: "Praxidike" },
      { moon: "Thyone" },
      { moon: "Hermippe" },
      { moon: "Aitne" },
      { moon: "Eurydome" },
      { moon: "Euanthe" },
      { moon: "Euporie" },
      { moon: "Orthosie" },
      { moon: "Sponde" },
      { moon: "Kale" },
      { moon: "Pasithee" },
      { moon: "Hegemone" },
      { moon: "Mneme" },
      { moon: "Aoede" },
      { moon: "Thelxinoe" },
      { moon: "Arche" },
      { moon: "Kallichore" },
      { moon: "Helike" },
      { moon: "Carpo" },
      { moon: "Eukelade" },
      { moon: "Cyllene" },
      { moon: "Kore" },
      { moon: "Herse" },
      { moon: "S/2003 J 2" },
      { moon: "S/2003 J 4" },
      { moon: "S/2003 J 9" },
      { moon: "S/2003 J 10" },
      { moon: "S/2003 J 12" },
      { moon: "S/2003 J 15" },
      { moon: "S/2003 J 16" },
      { moon: "S/2003 J 18" },
      { moon: "S/2003 J 19" },
      { moon: "S/2003 J 23" },
      { moon: "S/2010 J 1" },
      { moon: "S/2011 J 1" },
      { moon: "S/2011 J 2" },
      { moon: "S/2011 J 2" },
      { moon: "S/2011 J 1" },
    ],
    isPlanet: true,
    discoveredBy: "Sumerios",
    discoveryDate: "Antigüedad",
    image: "/images/jupiter.jpg",
  },
  {
    id: "6",
    englishName: "Saturn",
    name: "Saturno",
    mass: { massValue: 5.683e26 },
    meanRadius: 58232,
    density: 0.687,
    gravity: 10.44,
    avgTemp: 134,
    semimajorAxis: 1433000000,
    inclination: 2.485,
    moons: [
      { moon: "Pan" },
      { moon: "Daphnis" },
      { moon: "Atlas" },
      { moon: "Prometheus" },
      { moon: "Pandora" },
      { moon: "Epimetheus" },
      { moon: "Janus" },
      { moon: "Aegaeon" },
      { moon: "Mimas" },
      { moon: "Methone" },
      { moon: "Anthe" },
      { moon: "Pallene" },
      { moon: "Enceladus" },
      { moon: "Tethys" },
      { moon: "Telesto" },
      { moon: "Calipso" },
      { moon: "Dione" },
      { moon: "Helene" },
      { moon: "Polydeuces" },
      { moon: "Rhea" },
      { moon: "Titan" },
      { moon: "Hyperion" },
      { moon: "Iapetus" },
      { moon: "Kiviuq" },
      { moon: "Ijiraq" },
      { moon: "Phoebe" },
      { moon: "Paaliaq" },
      { moon: "Skathi" },
      { moon: "Albiorix" },
      { moon: "Bebhionn" },
      { moon: "Erriapus" },
      { moon: "Skoll" },
      { moon: "Siarnaq" },
      { moon: "Tarqeq" },
      { moon: "Tarvos" },
      { moon: "Greip" },
      { moon: "Hyrrokkin" },
      { moon: "Jarnsaxa" },
      { moon: "Mundilfari" },
      { moon: "Narvi" },
      { moon: "Bergelmir" },
      { moon: "Bestla" },
      { moon: "Farbauti" },
      { moon: "Fenrir" },
      { moon: "Fornjot" },
      { moon: "Hati" },
      { moon: "Hati" },
      { moon: "Kari" },
      { moon: "Loge" },
      { moon: "Skoll" },
      { moon: "Surtur" },
      { moon: "Anthe" },
      { moon: "Aegir" },
      { moon: "Bebhionn" },
      { moon: "Bergelmir" },
      { moon: "Bestla" },
      { moon: "Farbauti" },
      { moon: "Fenrir" },
      { moon: "Fornjot" },
      { moon: "Greip" },
      { moon: "Hati" },
      { moon: "Hyrrokkin" },
      { moon: "Jarnsaxa" },
      { moon: "Kari" },
      { moon: "Loge" },
      { moon: "Skoll" },
      { moon: "Surtur" },
      { moon: "Suttungr" },
      { moon: "Thiazzi" },
      { moon: "Thrymr" },
      { moon: "Ymir" },
      { moon: "S/2004 S 7" },
      { moon: "S/2004 S 12" },
      { moon: "S/2004 S 13" },
      { moon: "S/2004 S 17" },
      { moon: "S/2006 S 1" },
      { moon: "S/2006 S 3" },
      { moon: "S/2007 S 2" },
      { moon: "S/2007 S 3" },
      { moon: "S/2009 S 1" },
      { moon: "S/2004 S 7" },
      { moon: "S/2004 S 12" },
      { moon: "S/2004 S 13" },
      { moon: "S/2004 S 17" },
      { moon: "S/2006 S 1" },
      { moon: "S/2006 S 3" },
    ],
    isPlanet: true,
    discoveredBy: "Sumerios",
    discoveryDate: "Antigüedad",
    image: "/images/saturn.jpg",
  },
  {
    id: "7",
    englishName: "Uranus",
    name: "Urano",
    mass: { massValue: 8.681e25 },
    meanRadius: 25362,
    density: 1.271,
    gravity: 8.69,
    avgTemp: 76,
    semimajorAxis: 2877000000,
    inclination: 0.772,
    moons: [
      { moon: "Cordelia" },
      { moon: "Ofelia" },
      { moon: "Bianca" },
      { moon: "Cressida" },
      { moon: "Desdémona" },
      { moon: "Juliet" },
      { moon: "Portia" },
      { moon: "Rosalinda" },
      { moon: "Cupid" },
      { moon: "Belinda" },
      { moon: "Perdita" },
      { moon: "Puck" },
      { moon: "Mab" },
      { moon: "Miranda" },
      { moon: "Ariel" },
      { moon: "Umbriel" },
      { moon: "Titania" },
      { moon: "Oberón" },
      { moon: "Francisco" },
      { moon: "Calibán" },
      { moon: "Stephano" },
      { moon: "Trínculo" },
      { moon: "Sycorax" },
      { moon: "Margaret" },
      { moon: "Prospero" },
      { moon: "Setebos" },
      { moon: "Ferdinando" },
      { moon: "Francisco" },
      { moon: "Calibán" },
      { moon: "Stephano" },
      { moon: "Trínculo" },
      { moon: "Sycorax" },
      { moon: "Margaret" },
      { moon: "Prospero" },
      { moon: "Setebos" },
      { moon: "Ferdinando" },
      { moon: "Perdita" },
      { moon: "Mab" },
      { moon: "Cupid" },
      { moon: "Belinda" },
      { moon: "Puck" },
      { moon: "Miranda" },
    ],
    isPlanet: true,
    discoveredBy: "Sumerios",
    discoveryDate: "Antigüedad",
    image: "/images/uranus.jpg",
  },
  {
    id: "8",
    englishName: "Neptune",
    name: "Neptuno",
    mass: { massValue: 1.024e26 },
    meanRadius: 24622,
    density: 1.638,
    gravity: 11.15,
    avgTemp: 72,
    semimajorAxis: 4503000000,
    inclination: 1.769,
    moons: [
      { moon: "Náyade" },
      { moon: "Talasa" },
      { moon: "Despina" },
      { moon: "Galatea" },
      { moon: "Larisa" },
      { moon: "Hipocampo" },
      { moon: "Proteo" },
      { moon: "Tritón" },
      { moon: "Nereida" },
      { moon: "Halimede" },
      { moon: "Sao" },
      { moon: "Laomedeia" },
      { moon: "Psámate" },
      { moon: "Neso" },
      { moon: "Sao" },
      { moon: "Laomedeia" },
      { moon: "Psámate" },
      { moon: "Neso" },
      { moon: "Náyade" },
      { moon: "Talasa" },
      { moon: "Despina" },
      { moon: "Galatea" },
      { moon: "Larisa" },
      { moon: "Hipocampo" },
      { moon: "Proteo" },
      { moon: "Tritón" },
      { moon: "Nereida" },
      { moon: "Halimede" },
    ],
    isPlanet: true,
    discoveredBy: "Sumerios",
    discoveryDate: "Antigüedad",
    image: "/images/neptune.jpg",
  },
];

export const getPlanetsMockAPI = async (): Promise<Planet[]> => {
  return PLANETS;
};

export const getPlanetDetailsMockAPI = async (
  id: string
): Promise<Planet | null> => {
  return PLANETS.find((planet) => planet.id === id) || null;
};
