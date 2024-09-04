import { Card } from "@/components/Card";
import { FilmService } from "@/services/film.service";

interface Props {
  params: { id: string };
}

export default async function FilmPage({ params }: Props) {
  const film = await FilmService.getFilmById((params.id));

  if ('message' in film) {
    return <div>{(film as { message: string }).message}</div>
  }

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Card
        title={film.title}
        subtitle={film.director}
        description={film.opening_crawl}
        path="films"
        id={(params.id)}
      />
    </div>
  );
}
