import React from "react";

interface Props {
    title: string;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: string;
  }

export function CardDetail({title, director, openingCrawl, producer, releaseDate}: Props) {
  return (
    <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Title: {title}
        </h4>
        <h5 className="px-2 text-xl font-bold text-indigo-400 dark:text-white">
          Director: {director}
        </h5>
        <p className="px-2 text-xs font-bold text-indigo-400 dark:text-white">
          Date: {releaseDate}
        </p>
        <p className="mt-2 px-2 text-base text-gray-600">
          {openingCrawl}
        </p>
      </div>
    </div>
  );
}

