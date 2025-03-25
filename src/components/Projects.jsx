import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Profile from '../../public/assets/profile.jpg';
import { ArrowRight, Import } from 'lucide-react';
import Parkin from '../../public/assets/parkin.jpg'
import ParkinAdmin from '../../public/assets/parkinAdmin.png'
import Arrow from './Arrow';
import gsap from 'gsap';
import Apple from '../../public/assets/Apple.png'
import sps from '../../public/assets/sps.png';
import Imagify from '../../public/assets/Imagify.jpg'
const Projects = () => {

  const navigate = useNavigate();
  useEffect(() => {
    gsap.fromTo(
      '#project',
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
  const projects = [
    {
      image: Parkin,
      name: 'PARKin - Parking Slot Booking ',
      title: 'FULLSTACK PROJECT',
      link: 'https://parkinweb.onrender.com/',
    },
    {
      image: ParkinAdmin,
      name: 'PARKin Admin - Administrator',
      title: 'FULLSTACK PROJECT',
      link: 'https://parkinwebadmin.onrender.com/',
    },
    {
      image: Imagify,
      name: 'Imagify - Text To Image Generator',
      title: 'FULLSTACK PROJECT',
      link: 'https://imagify-fnql.onrender.com/',
    },
    {
      image: Apple,
      name: 'Apple Clone Website',
      title: 'WEB PROJECT',
      link: 'https://keen-liger-097e40.netlify.app',
    },
  ];

  return (
    <div id='project' className="sm:px-9">
      <h1 className="py-10 text-2xl font-medium ml-5 text-white">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <a
            target="_blank"
            href={project.link}
            key={index}
            className="shadow-lg transition duration-300 group overflow-hidden px-5 mb-5 hover:rounded-xl"
          >
            {/* Image Section */}
            <div
              style={{ aspectRatio: '1 / 1' }}
              className="relative overflow-hidden rounded-2xl"
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
      <div className="px-5 flex justify-center lg:justify-end mt-8">
        <button onClick={() => navigate('/project')} className="py-2 my-3 mb-10 w-full lg:w-1/3 rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
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