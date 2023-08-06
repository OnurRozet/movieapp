import axios from "axios";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const movieId = params.id;

  let movieDetail;
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    .then((res) => {
      movieDetail = res.data;
    })
    .catch((err) => console.log(err));

  console.log(movieDetail);
  return (
    <div className="relative p-7 min-h-screen ">
      {movieDetail && (
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movieDetail?.backdrop_path || movieDetail?.poster_path
            }`}
            alt="movieDetail"
            fill
            objectFit="cover"
          />
          <div className=" absolute w-1/2">
            <div className="text-3xl font-bold my-5">{movieDetail?.title}</div>
            <div className=" text-xl font-serif">{movieDetail?.overview}</div>
            <div className=" my-5 text-xl font-semibold">{movieDetail?.release_date} - imdb: {movieDetail?.vote_average}</div>
            <button className="p-3 w-32 text-center border cursor-pointer text-amber-600 rounded-2xl hover:bg-amber-700 hover:text-white transition-all font-bold text-2xl">Trial</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
