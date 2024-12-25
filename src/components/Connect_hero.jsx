import gsap from 'gsap'
import { ArrowRight, Github, Instagram, Linkedin, LinkedinIcon, Mail } from 'lucide-react'
import React, { useEffect } from 'react'


const Connect_hero = () => {
  useEffect(()=>{
    gsap.fromTo(
      '#connect',
      {
        y:180,
        opacity:0,
      },
      {
        y:0,
        opacity:1,
        ease:'power4.out'
      }
    )
  },[])
  return (
    <div className='lg:px-11 p-5' id='connect'>
        <h1 className= 'text-6xl font-medium text-white'>
        Let's Connect
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
        <a href='https://www.linkedin.com/in/nivas-malligesan-419243292/' target='blank' className=" py-2 w-full lg:w-full rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
          LinkedIn
          <Linkedin
            size={15}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-50"
          />
        </a>
        <a target='blank' href='https://github.com/NivasMalligesan' className=" py-2 w-full lg:w-full rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
          Github
          <Github
            size={15}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-50"
          />
        </a>
        <a href='mailto:nivasmalligesan@gmail.com'  className=" py-2  w-full lg:w-full rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
          Email
          <Mail
            size={15}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-50"
          />
        </a>
        <a href="https://www.instagram.com/nivas_ig/profilecard/?igsh=MWVhejQ2OXM2a2F3eQ==" target='blank' className=" py-2 w-full lg:w-full rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
          Instagram
          <Instagram
            size={15}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-50"
          />
        </a>
        </div>
    </div>
  )
}

export default Connect_hero