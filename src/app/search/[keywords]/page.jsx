import MovieItem from '@/app/components/MovieItem';
import axios from 'axios';
import React from 'react'

const page = async({params}) => {
    console.log(params.keywords);

    let searchedMovie=[]
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.keywords}&language=en-US&page=1`)
    .then((res)=>{
        searchedMovie=res.data
    }).catch((err)=>console.log(err))
    console.log(searchedMovie.results);
  return (
    <div className='flex flex-wrap gap-3'>
        {
            searchedMovie?.results ? (
                searchedMovie?.results?.map((movie)=>(
                    <MovieItem key={movie.id} 
                     movie={movie}/>
                   ))
            ):(
               <>No Result Found</>
            )
        }

    </div>
  )
}

export default page