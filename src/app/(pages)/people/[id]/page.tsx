import { Card } from "@/components/Card";
import { PeopleService } from "@/services/people.service";

interface Props {
  params: { id: string };
}

export default async function PeoplePage({ params }: Props) {
  const people = await PeopleService.getPeopleById(params.id);

  if ('message' in people) {
    return <div>{(people as { message: string }).message}</div>
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Card
        title={people.name}
        subtitle={`Skin color: ${people.skin_color}` }
        description={`Gender: ${people.gender} - Eye color: ${people.eye_color} - Height: ${people.height}`}
        id={(params.id)}
        path="people"
      />
    </div>
  );
}
