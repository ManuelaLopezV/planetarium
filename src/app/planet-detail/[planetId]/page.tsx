import { getPlanetDetails } from "@/app/(home)/actions/planets";
import { Planet } from "@/types";
import BackButton from "@/components/BackButton";
import { PlanetDetail } from "@/components/PlanetDetail";

export default async function PlanetDetailPage({
  params,
}: {
  params: Promise<{ planetId: string }>;
}) {
  const { planetId } = await params;

  const planet: Planet | null = await getPlanetDetails(planetId);

  if (!planet) {
    return <h1>Planeta no encontrado</h1>;
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
