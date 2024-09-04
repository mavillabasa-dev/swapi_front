import { Card } from "@/components/Card";
import { StarshipService } from "@/services/starships.service";

interface Props {
  params: { id: string };
}

export default async function StarshipPage({ params }: Props) {
  const starship = await StarshipService.getStarshipById(params.id);

  if ("message" in starship) {
    return <div>{(starship as { message: string }).message}</div>;
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Card
        title={starship.name}
        subtitle={`Model: ${starship.model} - Manufacturer: ${starship.manufacturer}`}
        description={`Passengers: ${starship.passengers} - Cost: ${starship.cost_in_credits} - Class: ${starship.starship_class}`}
        id={params.id}
        path="starships"
      />
    </div>
  );
}
