import Link from "next/link";
import React from "react";

interface FilmCardProps {
  title: string;
  subtitle: string;
  description?: string;
  path: string;
  id: string;
}

export function Card({ description, subtitle, title, id, path }: FilmCardProps) {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <h4 className="mb-2 block font-sans text-lg font-medium text-gray-500 leading-relaxed tracking-wide">
          {subtitle}
        </h4>
        {description && (
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        )}
      </div>
      {!description && (
        <Link href={`${path}/${id}`}>
          <div className="p-6 pt-0 flex justify-end">
            <button
              className="select-none rounded-full bg-blue-500 w-10 h-10 flex items-center justify-center text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              +
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}
