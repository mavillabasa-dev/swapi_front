import { paths } from "@/constants/endpointsRoutes";
import { IStarship } from "@/models/starships.model";

export abstract class StarshipService {
    static async getStarship(value?:string) : Promise<IStarship[]> {
        const dataGeneric = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_STARSHIPS}?name=${value || ''}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .catch((error) => error);
          return dataGeneric;
    }

    static async getStarshipById(id: string): Promise<IStarship> {
        const dataGeneric = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_STARSHIPS}/${id}`, {
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