"use client";
import React, { useState } from "react";
import SearchBar from "../Input";
import { Card } from "../Card";
import { FilmService } from "@/services/film.service";
import { PlanetsService } from "@/services/planets.service";

interface IPage {
  array: any[];
}

const LayoutRenderPlanets = ({ array }: IPage) => {
  const [items, setItems] = useState(array);

  const handleSearch = async (value: string) => {
    let result;
    try {
      result = await PlanetsService.getPlanets(value);
      setItems(result || []);
    } catch (error) {
      console.error("Failed to fetch films:", error);
    }
  };
  return (
    <>
      <div className="p-5">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center bg-stone-50 p-10">
        {items.map((item, i) => {
          return (
            <div key={item._id} className="flex-1">
              <Card
                id={item._id}
                title={item.name}
                subtitle={`${item.population} habitants`}
                path="planets"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LayoutRenderPlanets;
