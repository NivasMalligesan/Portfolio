import React, { useEffect } from 'react';
import python from '../../public/assets/python.png';
import react from '../../public/assets/react.png';
import tailwind from '../../public/assets/tailwind.png';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import express from '../../public/assets/express.png';
import MongoDB from '../../public/assets/MongoDB.png';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {

    gsap.fromTo(
      '#skills .skill-card', 
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15, 
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 80%', 
          end: 'bottom top', 
          toggleActions: 'play reverse play reverse',

          ease: 'power4.out',
        }
      }
    );
  }, []);

  const skills = [
    {
      image: react,
      name: 'React',
      description: 'Frontend Framework',
    },
    {
      image: express,
      name: 'Express',
      description: 'backend Framework',
    },
    {
      image: MongoDB,
      name: 'MongoDB',
      description: 'Database Management',
    },
    
  ];

  return (
    <div className="sm:px-9">
      <h1 className="py-10 font-medium ml-5 text-4xl sm:text-5xl text-white">Skills</h1>
      <div id='skills' className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card flex items-center bg-zinc p-7 rounded-xl cursor-pointer"
          >
            <img src={skill.image} alt={`${skill.name} logo`} className="w-12 h-12 rounded-full" />
            <div className="ml-5">
              <h1 className="text-white">{skill.name}</h1>
              <h1 className="text-gray text-sm mt-1">{skill.description}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 flex justify-center lg:justify-end mt-8">
        <button className="py-2 my-3 mb-10 w-full lg:w-1/3 rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
          Explore More Skills
          <ArrowRight
            size={15}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-3"
          />
        </button>
      </div>
    </div>
  );
};

export default Skills;
