"use client";
import React, { useState } from "react";
import SearchBar from "../Input";
import { Card } from "../Card";
import { FilmService } from "@/services/film.service";

interface IPage {
  array: any[];
}

const LayoutRenderFilms = ({ array }: IPage) => {
  const [items, setItems] = useState(array);

  const handleSearch = async (value: string) => {
    let result;
    try {
      result = await FilmService.getFilms(value);
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
              <Card id={item._id} title={item.title} subtitle={item.director} path="films" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LayoutRenderFilms;
