import LayoutRenderFilms from "@/components/LayoutFilms";
import Navbar from "@/components/Navbar";
import { FilmService } from "@/services/film.service";

export default async function FilmsPage() {
  const films = await FilmService.getFilms();

  return (
    <>
      <LayoutRenderFilms array={films} />;
    </>
  );
}
