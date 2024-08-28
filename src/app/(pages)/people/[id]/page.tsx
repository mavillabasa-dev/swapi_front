import { CardDetail } from "@/components/CardDetail";
import { FilmService } from "@/services/film.service";
import { PeopleService } from "@/services/people.service";

interface Props {
  params: { id: string };
}

export default async function PeoplePage({ params }: Props) {
  const response = await PeopleService.getPeopleById(params.id);
  console.log("🚀 ~ PeoplePage ~ response:", response, params.id)

  return (
    <div className="bg-gray-100 h-screen pt-10">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
        <div className="mt-2 mb-8 w-full">
          <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            Name: {response.name}
          </h4>
          <h5 className="px-2 text-xl font-bold text-indigo-400 dark:text-white">
            Birthyear: {response.birth_year}
          </h5>
        </div>
      </div>
    </div>
  );
}
