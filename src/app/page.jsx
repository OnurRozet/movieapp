import axios from "axios";
import React from "react";
import MovieItem from "./components/MovieItem";

// `https://api.themoviedb.org/3/${
//   searchParams.genre ? "/movie" + searchParams.genre : "trending/all/day"
// }?api_key=${process.env.API_KEY}?language=en-US&page=1`

const page = async ({ searchParams }) => {
  let movies;
  try {
     await axios.get(
      `https://api.themoviedb.org/3/${
        searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
      }?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ).then((res)=>{
      movies = res.data
    })
   
  } catch (error) {
    console.error("An Ocurred error", error);
  }

  return (
    <div className="min-w-[470px] flex items-center justify-center flex-wrap gap-3 mt-2 cursor-pointer">
      {
        movies?.results?.map((movie)=>(
         <MovieItem key={movie.id} 
          movie={movie}/>
        ))
      }
    </div>
  )
};

export default page;
