import LayoutRenderPlanets from "@/components/LayoutPlanets";
import { PlanetsService } from "@/services/planets.service";

export default async function PlanetsPage() {
  const planets = await PlanetsService.getPlanets();
  return (
    <>
      <LayoutRenderPlanets array={planets} />;
    </>
  );
}
