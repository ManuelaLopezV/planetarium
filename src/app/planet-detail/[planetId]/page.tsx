import { getDummyPlanetDetails } from "@/app/(home)/actions/planets";
import { Planet } from "@/types";
import BackButton from "@/components/BackButton";
import { PlanetDetail } from "@/components/PlanetDetail";

export default async function PlanetDetailPage({
  params,
}: {
  params: Promise<{ planetId: string }>;
}) {
  const { planetId } = await params;

  const planet: Planet | null = await getDummyPlanetDetails(planetId);

  if (!planet) {
    return <h1>Planeta no encontrado</h1>;
  }

  return (
    <>
      <div className="p-4">
        <BackButton />
      </div>
      <PlanetDetail planet={planet} />
    </>
  );
}
