import React, { useState } from 'react'
import {HiMenuAlt3, } from "react-icons/hi"
import{TfiSearch} from "react-icons/tfi"
import{SiCodechef} from "react-icons/si"
import {useNavigate}from "react-router-dom"
import ReactPlayer from 'react-player'
// route usenavigate, navlink, link,
const Navbar = () => {
    const navigate = useNavigate()
const [nav,setNav]=useState(false);
const handleNav = ()=>{
    setNav(!nav)
}
const route = (value)=>{
navigate(`/${value}`)
}
  return (
<div className='relative w-full h-full '>
<div className='fixed w-full flex justify-between p-4 items-center bg-orange-400' >
        <div className='flex '> 
            < TfiSearch size={25}  className='z-20 text-black cursor-pointer '/>
            <input className='border-white border-0 rounded-xl before:content pl-4' 
            placeholder='Search'
            type='text'>

            </input>
            
        </div>
        <div className='flex '>
            <SiCodechef size={40} className='z-20 text-black cursor-pointer '/>
        <h1 className='text-black font-bold text-2xl z-20 cursor-pointer mt-2' >Mr HomeMan </h1>
        </div>
        
        <div className='flex'>
            
        <HiMenuAlt3 size={25} className='z-20 text-black cursor-pointer' onClick={handleNav}/>
        </div>
       
<div className={nav ?'absolute text-black-300 left-0 top-0 w-screen h-screen  mt-16 flex  z-10'
:"absolute top-0 h-screen left-[100%] "}>
    <div className=' flex absolute w-full h-screen bg-white  '>
    <ul className='flex flex-col   h-full  justify-center bg-white mt-3 '>
        <li className='font-bold text-5xl p-3 cursor-pointer hover:text-sky-700'  
        onClick={()=>route("")}>Home</li>
        <li className='font-bold text-5xl p-3 cursor-pointer hover:text-orange-400' 
        onClick={()=>route("about")}>About</li>
        <li className='font-bold text-5xl p-3 cursor-pointer hover:text-sky-700'  
        onClick={()=>route("Newsroom")}>NewsRoom</li>
        <li className='font-bold text-5xl p-3 cursor-pointer hover:text-orange-400'  
        onClick={()=>route("food")}>Foods</li>
        <li className='font-bold text-5xl p-3 cursor-pointer hover:text-sky-700'  
        onClick={()=>route("knowledge")}>KnowLedge</li>
    </ul>

    <div className='my-40 ml-96 absolute bg-sky-300' >
  <ReactPlayer style={{contentVisibility:"auto"}} url={"https://www.youtube.com/watch?v=9wt6NjN4oA8&t=1s"} 
  controls={true}
  playing={true}
  loop={true}/>
    </div>

    
    </div>
    {/* <div className='w-full h-full absolute   '>
        <img src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
        <img src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
        <img src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
         <img src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
    </div> */}
   
</div>

    </div>
</div>
    
  )
}

export default Navbar


//ease-in duration-300 z-10 animation asigln