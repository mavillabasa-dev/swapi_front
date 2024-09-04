import LayoutRenderPeople from "@/components/LayoutPeople";
import { PeopleService } from "@/services/people.service";

export default async function PeoplePage() {
  const people = await PeopleService.getPeople();

  return (
    <>
      <LayoutRenderPeople array={people} />;
    </>
  );
}
