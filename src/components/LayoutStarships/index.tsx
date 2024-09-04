"use client";
import React, { useState } from "react";
import SearchBar from "../Input";
import { Card } from "../Card";
import { StarshipService } from "@/services/starships.service";

interface IPage {
  array: any[];
}

const LayoutRenderStarship = ({ array }: IPage) => {
  const [items, setItems] = useState(array);

  const handleSearch = async (value: string) => {
    let result;
    try {
      result = await StarshipService.getStarship(value);
      setItems(result || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
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
              subtitle={`Model: ${item.model} - Manufacturer: ${item.manufacturer}`}
              path="starships"
            />
          </div>
          );
        })}
      </div>
    </>
  );
};

export default LayoutRenderStarship;
