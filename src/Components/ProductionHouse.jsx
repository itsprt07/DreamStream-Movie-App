import React from 'react'
import disney from './../assets/Images/disney.png'
import marvel from './../assets/Images/marvel.png'
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwar from './../assets/Images/starwar.png'

import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:nationalG,
            video:nationalGeographicV 
        },
        {
            id:4,
            image:pixar,
            video:pixarV
        },
        {
            id:5,
            image:starwar,
            video:starwarV 
        }
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 md:px-16 px-5'>
        {productionHouseList.map((item,index)=>(
            <div key={index} className='border-[2px] border-gray-600
             rounded-lg relative overflow-hidden hover:scale-110 transition-all 
             duration-300 ease-in-out cursor-pointer shadow-xl shadow-pink-700'>
                <img  src={item.image} className='w-full z-0'/>
                <video src={item.video} autoPlay loop muted className='absolute top-0 left-0 w-full h-full 
                object-cover opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'/>
                
                
            </div>
        ))

        }
    </div>
  )
}

export default ProductionHouse
