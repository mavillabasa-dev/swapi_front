import { paths } from "@/constants/endpointsRoutes";
import { IPeople } from "@/models/people.interface";

export abstract class PeopleService {
  static async getPeople(value?: string): Promise<IPeople[]> {
    console.log( `${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_PEOPLE}?name=${value || ''}`)
    const dataGeneric = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_PEOPLE}?name=${value}`,
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

  static async getPeopleById(id: string): Promise<IPeople> {
    const dataGeneric = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_PEOPLE}/${id}`,
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
