import { paths } from "@/constants/endpointsRoutes";
import { IPlanets } from "@/models/planets.interface";

export abstract class PlanetsService {
    static async getPlanets(value?: string) : Promise<IPlanets[]> {
        const dataGeneric = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_PLANETS}?name=${value || ''}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .catch((error) => error);
          return dataGeneric;
    }

    static async getPlanetsById(id: string): Promise<IPlanets> {
        const dataGeneric = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${paths.GET_PLANETS}/${id}`, {
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