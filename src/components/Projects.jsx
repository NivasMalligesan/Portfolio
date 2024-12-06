import React, { useRef } from 'react';
import profile from '../../public/assets/profile.jpg';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import Arrow from './Arrow';

const Projects = () => {
  const projects = [
    {
      image: profile,
      name: 'Apple Clone Website',
      title: 'WEB PROJECT',
      link:'https://nivasportfolio.framer.website/projects'
    },
    {
      image: profile,
      name: 'E-Commerce Platform',
      title: 'WEB PROJECT',
      link:'https://nivasportfolio.framer.website/projects'
    },
    
  ];

  const arrowRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const arrows = arrowRefs.current[index]?.querySelectorAll('.arrow');
    if (arrows) {
      gsap.fromTo(
        arrows,
        { x: '-100%' },
        {
          x: '100%',
          duration: 1.5,
          repeat: -1,
          ease: 'none',
          modifiers: {
            x: gsap.utils.wrap('-100%', '100%'),
          },
        }
      );
    }
  };

  const handleMouseLeave = (index) => {
    const arrows = arrowRefs.current[index]?.querySelectorAll('.arrow');
    if (arrows) {
      gsap.killTweensOf(arrows);
      gsap.set(arrows, { x: 0 });
    }
  };

  return (
    <div className="h-screen p-3 lg:p-0 lg:ml-9 mt-10">
      <h1 className="py-10 text-2xl font-medium ml-5">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <a
            target='blank'
            href={project.link}
            key={index}
            className="shadow-lg transition duration-300 group overflow-hidden px-5 mb-5 hover:rounded-xl"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Image Section */}
            <div
              style={{ aspectRatio: '1 / 1' }}
              className="relative overflow-hidden rounded-2xl  "
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <div className="pt-4 flex items-center justify-between">
              <div className="group-hover:translate-x-6 duration-300">
                <h1 className="text-sm font-medium text-green-500">
                  {project.title}
                </h1>
                <h2 className="mt-1 text-white">{project.name}</h2>
              </div>

              {/* Arrow Section */}
              <Arrow />
            </div>
          </a>
        ))}
      </div>
      <div className="px-5 flex lg:hidden ">
          <button className="py-2 my-3 mb-10 w-full rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center mx-auto transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
            Explore More Projects
            <ArrowRight
              size={15}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-3"
            />
          </button>
        </div>
    </div>
  );
};

export default Projects;
