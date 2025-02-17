// import { getPlanetDetails } from "@/app/(home)/actions/planets";
import { Planet } from "@/types";
import BackButton from "@/components/BackButton";
import { PlanetDetail } from "@/components/PlanetDetail";
import { getPlanetDetails } from "@/app/(home)/actions/planets";

export default async function PlanetDetailPage({
  params,
}: {
  params: Promise<{ planetId: string }>;
}) {
  const { planetId } = await params; // Extrae el ID del planeta desde los parámetros de la URL

  const planet: Planet | null = await getPlanetDetails(planetId); // Obtiene la información del planeta desde la API

  if (!planet) {
    return <h1>Planeta no encontrado</h1>; // Muestra un mensaje si el planeta no existe
  }

  return (
    <>
      <div className="pt-14">
        <BackButton />
      </div>
      <PlanetDetail planet={planet} />
    </>
  );
}
