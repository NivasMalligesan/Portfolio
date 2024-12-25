import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import profile from '../../public/assets/profile.jpg';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Testimonial = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '#testmonial', 
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '#testmonial',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  const testimonials = [
    {
      text: `"Delectus quam nam fut nam commodi, sed suscipit quaerat asperiores quae voluptate consectetur!"`,
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
    <div
      id="testmonial"
      className="lg:mx-9 overflow-hidden p-5 bg-black"
    >
      <h1 className="py-10 text-2xl font-medium text-white">
        Kind Words From Mentors
      </h1>
      <div className="flex items-center overflow-hidden rounded-2xl shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5),inset_-10px_-10px_20px_rgba(0,0,0,0.2)]">
        <div className="flex w-[100%] lg:w-[200%] animate-marqueeFast lg:animate-marquee space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc h-[410px] min-w-[300px] lg:min-w-[350px] rounded-2xl px-10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-start gap-2 py-10 text-green-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-gray h-2/3 w-full">
                <p>{testimonial.text}</p>
              </div>
              <div className="flex items-center justify-start py-10">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-12 h-12 rounded-xl"
                />
                <div className="w-2/3 ml-3">
                  <h1 className="text-white text-xl">{testimonial.name}</h1>
                  <h1 className="text-gray text-sm">{testimonial.designation}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
