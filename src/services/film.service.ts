import { paths } from "@/constants/endpointsRoutes";
import { IFilm } from "@/models/film.interface";

export abstract class FilmService {
  static async getFilms(value?: string): Promise<IFilm[]> {
    const dataGeneric = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_FILMS}?name=${value || ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => error);
    return dataGeneric;
  }

  static async getFilmById(id: string): Promise<IFilm> {
    const dataGeneric = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_FILMS}/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => error);
    return dataGeneric;
  }
}
