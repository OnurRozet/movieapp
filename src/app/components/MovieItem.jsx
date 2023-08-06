"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

const MovieItem = ({ movie }) => {
  const router=useRouter()
  
  return (
    <div className="relative ">
      <div className=""  onClick={()=>router.push(`movie/${movie.id}`)}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="image"
          width={450}
          height={350}
        />
        <div className=" absolute bottom-0 opacity-0 hover:opacity-100 p-2 w-full h-full flex flex-col justify-end">
          <p className="text-2xl font-thin ">{movie.title}</p>
          <p className="text-lg font-thin ">
            {movie.release_date} - imdb: {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
