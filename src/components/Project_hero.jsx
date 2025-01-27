import React,{useEffect} from 'react';
import sps from '../../public/assets/sps.png';
import Arrow from './Arrow';
import gsap from 'gsap';
import Apple from '../../public/assets/Apple.png'
import QR from '../../public/assets/QR.png'
const Project_hero = () => {

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
          image: Apple,
          name: 'Apple Clone Website',
          title: 'WEB PROJECT',
          link: 'https://keen-liger-097e40.netlify.app/',
        },
        {
          image: sps,
          name: 'Stone Paper Scissor Game',
          title: 'WEB PROJECT',
          link: 'https://its-rock-paper-scissor-game.netlify.app',
        },
        {
              image: QR,
              name: 'QR Code Generator',
              title: 'WEB PROJECT',
              link: 'https://pro-qr-generator.netlify.app',
            },
        
      ];
    

  return (
    <div  id='project'  className='p-5 md:p-10 mt-10'>
        <h1 className='text-white text-3xl font-medium ps-4 sm:text-5xl'>My Remarkable Project</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
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
   
    </div>
  )
}

export default Project_hero