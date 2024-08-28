import { films } from "@/constants/endpointsRoutes";
import { IFilm } from "@/models/film.interface";
import { IFilms } from "@/models/films.interface";

export abstract class FilmService {
  static async getFilms(): Promise<IFilms[]> {
    const dataGeneric = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${films.GET_FILMS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => error);
    return dataGeneric;
  }

  static async getFilmById(id: number): Promise<IFilm> {
    const dataGeneric = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${films.GET_FILMS}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => error);
    return dataGeneric;
  }
}
