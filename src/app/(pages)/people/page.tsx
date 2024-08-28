import { FilmCard } from "@/components/FilmCard";
import { PeopleCard } from "@/components/PeopleCard";
import { PeopleService } from "@/services/people.service";

export default async function PeoplePage() {
  const people = await PeopleService.getPeople();

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center bg-stone-50" >
      {people.map((people, i) => {
        return (
          <div key={people._id} className="flex-1">
            <PeopleCard
              id={people._id}
              name={people.name}
            />
          </div>
        );
      })}
    </div>
  );
}