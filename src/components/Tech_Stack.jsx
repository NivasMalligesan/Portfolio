import React, { useEffect } from 'react';
import python from '../../public/assets/python.png';
import react from '../../public/assets/react.png';
import tailwind from '../../public/assets/tailwind.png';
import Gsap from '../../public/assets/gsap.png';
import C from '../../public/assets/c.png';
import figma from '../../public/assets/figma.png';
import html from '../../public/assets/html.png';
import css from '../../public/assets/css.webp';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    // Set up GSAP animation
    gsap.fromTo(
      '#skills .skill-card', // Target each skill card
      {
        y: 180,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: 'power4.out', // Add stagger for animations
      }
      
    );
    gsap.fromTo(
      '#name', // Target each skill card
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15, 
        ease: 'power4.out',// Add stagger for animations
      }
      
    );
  }, []);

  const skills = [
    {
      image: react,
      name: 'React',
      description: 'Frontend Tool',
      brief: 'Building dynamic, responsive, and user-friendly web applications with React, delivering seamless experiences through clean and efficient code.',
    },
    {
      image: tailwind,
      name: 'Tailwind CSS',
      description: 'Styling Tool',
      brief: 'Crafting sleek, responsive, and modern designs effortlessly with Tailwind CSS, transforming ideas into visually stunning user interfaces',
    },
    {
      image: Gsap,
      name: 'GSAP',
      description: 'Animations',
      brief: 'Crafting sleek, responsive, and modern designs effortlessly with Tailwind CSS, transforming ideas into visually stunning user interfaces',
    },
    {
      image: python,
      name: 'Python',
      description: 'Programming Language',
      brief: 'As a data scientist with a robust background in Python, I have developed a deep proficiency in using Python for data analysis, machine learning, and data visualization. My experience encompasses a wide range of applications and tools, allowing me to deliver actionable insights and drive data-driven decision-making.',

    },
    {
      image: C,
      name: 'C',
      description: 'Programming Language',
      brief: 'I have honed my skills in system-level programming, algorithm optimization, and memory management. My work with C has equipped me with the ability to write efficient, high-performance code for a variety of applications, from low-level system components to complex algorithms.',

    },
    {
      image: figma,
      name: 'Figma',
      description: 'Collabrative Design',
      brief: 'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based approach streamlines the design process',

    },
    {
      image: html,
      name: 'HTML',
      description: 'Structure and Content',
      brief: 'HTML is the backbone of my web design work. I use it to structure content, ensuring that websites are semantically meaningful and accessible. It forms the foundation upon which the visual elements of a site are built.',

    },
    {
      image: css,
      name: 'CSS',
      description: 'Visual Styling',
      brief: 'CSS is my styling and layout powerhouse. Its instrumental in creating visually appealing websites by controlling everything from fonts and colors to the responsive design that adapts to various screen sizes.',

    },
  ];

  return (
    <div  className="sm:px-9 mb-10">
      <div id='skills'>

      <h1 id='name' className="py-10 text-6xl font-medium ml-5 text-white">My Tech Toolbox</h1>
      <div  className="grid grid-cols-1 gap-5 px-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card flex-row items-center bg-zinc p-7 rounded-xl cursor-pointer"
          >
            <div className='flex justify-start items-center mb-8'>

            <img src={skill.image} alt={`${skill.name} logo`} className="w-12 h-12" />
            <div className="ml-5">
              <h1 className="text-white">{skill.name}</h1>
              <h1 className="text-gray text-sm mt-1">{skill.description}</h1>
            </div>
            </div>
            <p className='text-gray text-base mt-1 py-3 w-2/3 ml-[68px]'>{skill.brief}</p>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default Skills;
