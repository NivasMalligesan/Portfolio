import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import profile from '../../public/assets/profile.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Testimonial = () => {
  
  useEffect(() => {
    // Set up GSAP animation
    gsap.fromTo(
      '#testmonial', // Target each skill card
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#testmonial',
          start: 'top 80%', // Trigger animation when the section is in view// Keep trigger active while scrolling past
          toggleActions: 'play reverse play reverse',
           // Play animation when entering and reverse when leaving
        },
      }
    );
  }, []);

  const testimonials = [
    {
      text: `"delectus quam nam fuga placeat! Laborum neque provident facilis incidunt, exercitationem molestias consectetur officiis est eligendi! Voluptates eaque inventore fugiat nam commodi, sed suscipit quaerat asperiores quae voluptate consectetur!"`,
      name: 'John Doe',
      designation: 'Senior Developer',
    },
    {
      text: `"Quisquam autem magni dolorem reiciendis, repellat aliquam quo, minus molestiae consequatur vero sit eaque dolore, laborum quidem. Nulla, deserunt optio eveniet tempore!"`,
      name: 'Jane Smith',
      designation: 'Lead Engineer',
    },
    {
      text: `"Ipsum reprehenderit quas quibusdam in dolorem sequi, consequatur mollitia dolorum deserunt, fugiat veniam eos. Recusandae laboriosam, maxime temporibus dolor consequatur!"`,
      name: 'Alice Johnson',
      designation: 'Project Manager',
    },
    {
      text: `"Magni ab eligendi placeat. Nihil adipisci illo recusandae tempora molestias, laborum sint facere veritatis. Laboriosam, exercitationem quo est quam neque!"`,
      name: 'Bob Brown',
      designation: 'UX Designer',
    },
    {
      text: `"Vero ratione quidem, eos velit inventore iusto reiciendis non aspernatur repellat suscipit! Rem magnam vero, dolores accusamus totam sapiente sint officiis!"`,
      name: 'Charlie Lee',
      designation: 'Marketing Lead',
    },
    {
      text: `"Possimus sit rerum reprehenderit asperiores accusamus, laborum voluptas deserunt officia, neque numquam, obcaecati alias soluta incidunt dolor perferendis ea."`,
      name: 'Daniel Green',
      designation: 'Full Stack Developer',
    },
  ];

  return (
    <div  id='testmonial' className='px-5 sm:px-9 mb-10'>
      <div>
        <h1  className='py-10 text-2xl font-medium ml-5 text-white'>Kind Words From Mentors</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-zinc h-[400px] rounded-2xl px-10 flex flex-col justify-between'>
            <div className='flex items-center justify-start gap-2 py-10 text-green-500'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className='text-gray '>
              <p>{testimonial.text}</p>
            </div>
            <div className='py-10 flex items-center'>
              <img src={profile} alt="Profile" className='w-12 h-12 rounded-xl' />
              <div className='w-2/3 ml-3'>
                <h1 className='text-white text-xl'>{testimonial.name}</h1>
                <h1 className='text-gray text-sm'>{testimonial.designation}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
