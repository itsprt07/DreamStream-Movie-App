import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import avatar from './../assets/Images/avatar.png'
import { HiHome , HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from "react-icons/hi2";
import { HiPlus , HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';


function Header() {
  const [toggle, setToggle] = useState(false) ; 
  const menu = [
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'WATCHLIST',
      icon:HiPlus
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    {
      name:'SERIES',
      icon:HiTv
    }
  ]
  return (
    
    <div className='flex items-center justify-between mt-2'>

      <div className='flex gap-8 items-center '>
      <img src={logo} className='w-[50px]  md:w-[50px] object-cover '/>
      <div className='hidden md:flex gap-8 '>
      {menu.map((item,index)=>(
        <HeaderItem key={index} name = {item.name} Icon = {item.icon}/>
      ))}
      </div>
      <div className='flex  md:hidden gap-5'>
      {menu.map((item,index)=> index<3&&(
        <HeaderItem key={index} name = {''} Icon = {item.icon}/>
      ))}
      </div>
      <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        <HeaderItem name={''} Icon={HiDotsVertical}/>
        {toggle? <div className='absolute mt-3 bg-[#121212] border-gray-700 border-[1px] p-3 px-5 py-4'>
        {menu.map((item,index)=> index>2&&(
        <HeaderItem key={index} name = {item.name} Icon = {item.icon}/>
      ))}
        </div>:null}
      </div>
      </div>
      <div>
      <img src={avatar} className='w-[40px] rounded-full flex-end'/>
      </div>
    </div>
    
  )
}

export default Header


