import React from 'react';
import { DonutIcon, Dot, DotIcon, Github, InstagramIcon, LayoutDashboard, Linkedin, LinkedinIcon, List, MailIcon, MessageCircle, Search } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import profile from '../../public/assets/profile.jpg'

const Navbar = () => {

  useGSAP(()=>{
    gsap.to('#Name',{
      x:0,
      opacity:1,

    })
  },[])


  return (
    <nav className='flex justify-between items-center p-5 sticky inset-0 z-50 bg-black'>
      <div className='flex items-center w-full sm:w-1/2'>
        <img src={profile} alt="" className='rounded-full w-10 h-10 ' />
        <div className="text-green-300 px-3 py-1 bg-light_green rounded ml-4 sm:hidden">Available For Work</div>
        <h1 className='text-xl ml-2 hidden sm:block'>Nivas Malligesan</h1>
      </div>
      <div className="text-green-300 px-3 py-2 hidden bg-light_green rounded sm:block">Available For Work</div>
      
    </nav>
  );
};

export default Navbar;
