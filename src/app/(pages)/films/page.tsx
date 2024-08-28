import { FilmCard } from "@/components/FilmCard";
import { FilmService } from "@/services/film.service";

export default async function FilmsPage() {
  const films = await FilmService.getFilms();

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center bg-stone-50" >
      {films.map((film, i) => {
        return (
          <div key={film._id} className="flex-1">
            <FilmCard
              id={film.episode_id}
              director={film.director}
              openingCrawl={film.opening_crawl}
              producer={film.producer}
              releaseDate={film.release_date.toString()}
              title={film.title}
            />
          </div>
        );
      })}
    </div>
  );
}
