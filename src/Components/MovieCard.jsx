
import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original" ;

function MovieCard({movie}) {
    console.log("Movie data:", movie);
  return (
    <>
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title}
         className='md:w-[200px]  w-[110px]  object-cover rounded-lg hover:border-[3px]
          border-gray-500 hover:scale-110 transition-all duration-150 ease-in 
          cursor-pointer shadow-xl shadow-gray-600' />
     
    </>
  )
}

export default MovieCard
