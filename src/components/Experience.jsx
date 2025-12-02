import React,{useEffect} from 'react'
import { PiStudentFill } from "react-icons/pi";
import { GiBlackBook } from "react-icons/gi";
import gsap from 'gsap';
import luisant from '../../public/assets/Luisant.jpg'
import google from '../../public/assets/Google.webp'

const Experience = () => {
    useEffect(() => {
        // Set up GSAP animation
        gsap.fromTo(
          '.experience-cards', // Target each skill card
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
        <h1 className='text-white text-2xl font-medium'>Experience</h1>
                <div className='experience-cards'>
        <div className='flex items-center text-white mt-10'>
          <img src={google} alt="" className='w-5 h-5' />
          <h1 className='ml-2 text-lg font-medium'>Google Student Ambassador</h1>
        </div>
          <p className='ml-6 lg:ml-8 text-gray mt-1'>Bannari Amman Institute Of Technology - Sathyamangalam  2027</p>
        </div>
        <div className='experience-cards'>
        <div className='flex items-center text-white mt-10'>
          <img src={luisant} alt="" className='w-5 h-5' />
          <h1 className='ml-2 text-lg font-medium'>Full Stack Developer - Intern</h1>
        </div>
          <p className='ml-6 lg:ml-8 text-gray mt-1'>Luisant Software Solution - Coimbatore (August 2025 - November 2025)</p>
        </div>

      </div>
    </div>
  )
}

export default Experience