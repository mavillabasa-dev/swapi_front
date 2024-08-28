import { films } from "@/constants/endpointsRoutes";
import { IFilm } from "@/models/film.interface";
import { IPeople } from "@/models/people.interface";

export abstract class PeopleService {
  static async getPeople(): Promise<IPeople[]> {
    const dataGeneric = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${films.GET_PEOPLE}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => error);
    return dataGeneric;
  }

  static async getPeopleById(id: string): Promise<IPeople> {
    const dataGeneric = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${films.GET_PEOPLE}/${id}`, {
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
