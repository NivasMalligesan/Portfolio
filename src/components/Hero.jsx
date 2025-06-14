import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight, Github, InstagramIcon, Linkedin, Mail, MapPin } from 'lucide-react';
import Cards from './Cards';
import Socialicons from './Socialicon';
import { useNavigate, useLocation } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      '#Hero ',
      {
        y: 180,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <div id="Hero" className="sm:px-5 pl-2 mt-6">
      <div className="flex  flex-col sm:flex-row">
        {/* Text Section */}
        <div className="flex-3 p-5 pb-0 mr-8">
          <div className="sm:mt-3 flex-row lg:flex items-center sm:ml-5">
            <h1 className="text-4xl sm:text-5xl text-white font-medium">Hello Everyone!</h1>
            <h1 className="text-4xl sm:text-5xl lg:ml-5 text-white font-medium">I'm Nivas.</h1>
          </div>
          <div className="mt-8 sm:ml-5 pr-8 sm:pr-0">
            <p className="text-sm sm:text-base text-gray">
              I’m a passionate developer who loves transforming complex problems into clean, actionable insights and fullstack applications with modern web technologies.
             </p>
            <Socialicons/>
          </div>
        </div>
        {/* Cards Section */}
        <div className="mr-6 lg:ml-8 sm:w-1/3 hidden md:block">
          <Cards />
        </div>
      
      </div>

      <div className="px-5 hidden lg:flex justify-center lg:justify-start mt-8 gap-6 lg:mt-0">
        <button onClick={() => navigate('/project')} className="py-2 my-3 mb-10 w-full lg:w-full rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
          Explore my Projects
          <ArrowRight
            size={15}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-3"
          />
        </button>
        <button onClick={() => navigate('/About')} className="py-2 my-3 mb-10 w-full lg:w-full rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
          
          More About Me
          <ArrowRight
            size={15}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:text-green-500 text-gray-400"
          />
        </button>


      </div>

     

      {/* Footer Section */}
      <div className="lg:flex justify-between items-center mt-10 lg:mt-3 ">
        <div className="px-5 flex lg:hidden">
          <button className="py-2 mt-3 w-full rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center mx-auto transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
            More About Me
            <ArrowRight
              size={15}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-3"
            />
          </button>
        </div>
      </div>
      

    </div>
  );
};

export default Hero;
