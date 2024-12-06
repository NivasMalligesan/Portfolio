import React from 'react'
import python from '../../public/assets/python.png'
import react from '../../public/assets/react.png'
import { ArrowRight } from 'lucide-react';

const Skills = () => {
  const skills = [
    {   
      image: react,
      name: 'React',
      description: 'Frontend Tool',
    },
    {   
      image: python,
      name: 'Python',
      description: 'Programming Language',
    },
    {   
      image: python,
      name: 'Django',
      description: 'Backend Framework',
    },
  ];

  return (
    <div className="sm:px-9">
      <h1 className="py-10 text-2xl font-medium ml-5">Skills</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
        {
          skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-zinc p-7 rounded-xl cursor-pointer">
              <img src={skill.image} alt={skill.name} className="w-12 h-12 rounded-full" />
              <div className="ml-5">
                <h1 className="text-white">{skill.name}</h1>
                <h1 className="text-gray text-sm mt-1">{skill.description}</h1>
              </div>
            </div>
          ))
        }
      </div>
      <div className="px-5 flex justify-center lg:justify-end mt-8">
        <button className="py-2 my-3 mb-10 w-full lg:w-1/3 rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
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

export default Skills;
