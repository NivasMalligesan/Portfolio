import gsap from 'gsap';
import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useNavigate } from "react-router-dom";

const Stack = () => {
    const navigate = useNavigate();
    useEffect(() => {
    
        gsap.registerPlugin(ScrollTrigger);

        
        gsap.fromTo(
            '#stack',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                trigger: '#stack',
                start: 'top 80%', 
                end: 'bottom top', 
                toggleActions: 'play reverse play reverse',
                ease: 'power4.out',
                },
            }
        );
    }, []);

    return (
        <div >
            <div id="stack" className="p-5 sm:p-10 lg:w-2/3">
                <h1 className="text-white text-2xl font-medium">Stack</h1>
                <div  className=" mt-5">
                    <p className="text-gray text-base mt-5">
                        My technical toolkit includes proficiency in Python, C, and Web Development. My Python expertise is complemented by a strong foundation in data science principles and practical experience in applying them to real-world problems. I also have practical experience in C programming roles.
                    </p>
                </div>
            </div>
            <div className='flex justify-center lg:justify-end mx-5'>

            <button onClick={()=> navigate('/tech_stack')} className='py-2 my-3 mb-10 w-full lg:w-1/4 rounded-xl pr-3 md:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none lg:mr-10'>
                View All Stacks
            </button>
            </div>
        </div>
    );
};

export default Stack;
