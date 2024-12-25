import React,{useEffect} from 'react'
import { PiStudentFill } from "react-icons/pi";
import { GiBlackBook } from "react-icons/gi";
import gsap from 'gsap';

const Education = () => {
    useEffect(() => {
        // Set up GSAP animation
        gsap.fromTo(
          '.education-cards', // Target each skill card
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15, // Add stagger for animations
            scrollTrigger: {
              trigger: '#about',
              start: 'top 80%', // Trigger animation when the section is in view
              end: 'bottom top', // Keep trigger active while scrolling past
              toggleActions: 'play reverse play reverse',
              // Play animation when entering and reverse when leaving
            },
          }
        );
      }, []);
  return (
    <div>
        <div className='p-5 sm:p-10 lg:w-2/3 '>
        <h1 className='text-white text-2xl font-medium'>Education</h1>
        <div className='education-cards'>
        <div className='flex items-center text-white mt-10'>
          <GiBlackBook size={18}/>
          <h1 className='ml-2 text-lg font-medium'>Student</h1>
        </div>
          <p className='ml-6 lg:ml-8 text-gray mt-1'>Sri Vijay Vidyalaya.Matric.Hr.Sec.School - Hosur 2023</p>
        </div>
        <div className='education-cards'>
        <div className='flex items-center text-white mt-10'>
          <PiStudentFill size={18}/>
          <h1 className='ml-2 text-lg font-medium'>B.Tech - Artificial Intelligence and Data Science (AI & DS)</h1>
        </div>
          <p className='ml-6 lg:ml-8 text-gray mt-1'>Bannari Amman Institute Of Technology - Sathyamangalam  2027</p>
        </div>
      </div>
    </div>
  )
}

export default Education