import React, { useEffect,useState,useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original" ;
import { HiChevronRight,HiChevronLeft } from "react-icons/hi";
const screenWidth = window.innerWidth


function Slider() {
    const[movieList,setMovieList] = useState([]) ;
    const elementRef = useRef() ; 
    useEffect(() => {
        getTrendingMovies(); 
    }, []);

    const getTrendingMovies = async () => {
        try {
            const response = await GlobalApi.getTrendingVideos();
            console.log(response.data.results);
            setMovieList(response.data.results) ;
        } catch (error) {
            console.error("Error fetching trending videos:", error);
        }
    };
    const sliderRight = (element) => {
        element.scrollLeft+=screenWidth -110
    }
    const sliderLeft =(element) => {
        element.scrollLeft-=screenWidth -110
    }
   
    return (
        <div className=''>
            <HiChevronLeft className= ' hidden md:block  text-white text-[30px] absolute left-10 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)} />
            <HiChevronRight className='  hidden md:block text-white text-[30px] absolute right-10 cursor-pointer mt-[150px]' onClick={()=>sliderRight(elementRef.current)} />
        <div className=' scroll-smooth flex overflow-x-auto  px-16 py-4 scrollbar-hide 'ref={elementRef}>
            
            {movieList.map((item,index)=>(
                item.backdrop_path&&(
                <img  key={index} src={IMAGE_BASE_URL +item.backdrop_path} className=' md:h-[300px]  min-w-full
                 object-cover  object-left-top mr-5  rounded-md hover:border-[4px] border-gray-500 transition-all duration-100 ease-in'/>)
            ))}
        </div>
        </div>
    );
}

export default Slider;
