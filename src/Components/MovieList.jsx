import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import HorMovieCard from './HorMovieCard';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieList({genreId,index_}) {
  
    
    const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieByGenreId = async () => {
      try {
        const resp = await GlobalApi.getMovieByGenreId(genreId);
        console.log(resp.data.results);
        setMovieList(resp.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

  
      getMovieByGenreId();
 

  }, [genreId]);
    
  return (
        <div className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5'>
      {movieList.map((item,index)=>(
       <>
      {index_%2==0?<HorMovieCard key={index} movie={item}/> : <MovieCard key={index} movie={item}/>}
       </> 
      ))}
    </div>
  )
}

export default MovieList
