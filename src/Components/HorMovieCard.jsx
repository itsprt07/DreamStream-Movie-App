import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original" ;


function HorMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
        <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt={movie.title}
         className='md:w-[260px]  w-[110px]  object-cover rounded-lg hover:border-[3px]
          border-gray-500  
          cursor-pointer shadow-lg shadow-gray-400 ' />
          <h2 className='md:w-[260px]  w-[110px] text-white mt-2'>{movie.title}</h2>
     
    </section>
  )
}

export default HorMovieCard

