import React, { useEffect } from 'react';// Import HorizontalLoop
import ConnectArrow from './ConnectArrow';
import gsap from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';


const Connect = () => {

  const navigate = useNavigate();


  useEffect(()=>{
    gsap.fromTo(
      '#connect',{
        y:80,
        opacity:0
      },{
        y:0,
        opacity:1,
        scrollTrigger:{
          trigger:'#connect',
          start:'top 90%',
          end : 'bottom top',
          toggleActions: 'play reverse play reverse',
          ease: 'power4.out',
        }
      }
    )
  },[])
  return (
    <div onClick={() => navigate('/contact') } id='connect' className='flex justify-center w-full my-32 lg:my-32 px-10 group relative cursor-pointer'>
      <div className='flex justify-between items-center'>
      <h1 className='text-white text-5xl sm:text-7xl lg:text-[150px] group-hover:text-opacity-25 font-medium duration-300 md:ml-10'>Let's Connect !</h1>
      </div>
      <div className="absolute px-10 lg:px-16 top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ConnectArrow />
      </div>
    </div>
);
}


export default Connect;
