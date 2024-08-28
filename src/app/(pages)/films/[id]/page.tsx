import { CardDetail } from "@/components/CardDetail";
import { FilmService } from "@/services/film.service";

interface Props {
  params: { id: string };
}

export default async function FilmPage({ params }: Props) {
  const film = await FilmService.getFilmById(Number(params.id));

  return (
    <div className="bg-gray-100 h-screen pt-10">
      <CardDetail
        title={film.title}
        director={film.director}
        openingCrawl={film.opening_crawl}
        producer={film.producer}
        releaseDate={film.release_date?.toString()}
      />
    </div>
  );
}
