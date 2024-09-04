import { Card } from "@/components/Card";
import { PlanetsService } from "@/services/planets.service";


interface Props {
  params: { id: string };
}

export default async function PlanetsPage({ params }: Props) {
  const planet = await PlanetsService.getPlanetsById(params.id);

  if ('message' in planet) {
    return <div>{(planet as { message: string }).message}</div>
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Card
        title={planet.name}
        subtitle={`${planet.population} habitants`}
        description={`Terrain: ${planet.terrain} - Climate: ${planet.climate}`}
        id={(params.id)}
        path="planets"
      />
    </div>
  );
}