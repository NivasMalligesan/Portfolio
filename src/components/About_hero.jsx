import React,{useEffect} from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Education from './Education';
import Stack from './Stack';
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6';


const About = () => {

  useEffect(() => {
   
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.education-cards', 
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15, 
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%', // Trigger animation when the section is in view
          end: 'bottom top', // Keep trigger active while scrolling past
          toggleActions: 'play reverse play reverse',
          // Play animation when entering and reverse when leaving
        },
      }
    );
    gsap.fromTo('#about',{
      y: 180,
      opacity:0,
    },{
      y:0,
      opacity:1,
      ease: 'power4.out',
    })
  }, []);


  return (
    <div id='about' className='sm:px-5 pl-2 mt-6'>
      {/* About me */}
      <div className='p-5 sm:p-10 lg:w-2/3'>
        <h1 className='text-white text-4xl sm:text-5xl font-medium'>Get to know me </h1>
        <p className='text-gray text-base mt-10'>
         I’m a passionate and curious fullstack developer who enjoys building smart, user-friendly web applications from the ground up. With a strong foundation in Python, SQL, and modern frameworks like React and Express.js, I love turning complex ideas into clean, functional, and scalable solutions. Whether it’s creating seamless user experiences or solving real-world challenges through code, I bring creativity, precision, and dedication to every project I work on.
       </p>
        <h1 className='text-white hover:text-green-500 duration-300 flex items-center gap-2 mt-10'>
        <FaLocationDot/>
        Hosur , Tamil Nadu, India
        </h1>
      </div>
      {/* Education */}
      <Education/>
      {/* stack */}
      <Stack/>
    </div>
  )
}

export default About