import Link from "next/link";
import React from "react";

interface FilmCardProps {
  name: string;
  id: string;
}

export function PeopleCard({
  name,
  id,
}: FilmCardProps) {
  return (
    <Link href={`people/${id}`}>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h5>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            More info
          </button>
        </div>
      </div>
    </Link>
  );
}
