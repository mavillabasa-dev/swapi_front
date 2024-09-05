import LayoutRenderStarship from "@/components/LayoutStarships";

import { StarshipService } from "@/services/starships.service";

export default async function StarshipPage() {
  const starships = await StarshipService.getStarship();

  return (
    <>
      <LayoutRenderStarship array={JSON.parse(JSON.stringify(starships))} />
    </>
  );
}
