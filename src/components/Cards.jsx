import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function CardWithImageExample() {
  return (
    <div
      className=" md:max-w-[28rem] md:h-[20rem] lg:w-64 lg:h-auto rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img
          className="rounded-t-lg w-full md:h-80 lg:h-40 object-cover"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt=""
        />
      </a>
      <div className="p-4">
        <button className="py-2 mt-3 w-full rounded-xl pr-3 sm:px-8 text-gray hover:text-green-500 hover:bg-zinc flex justify-center items-center mx-auto transition duration-300 group border border-opacity-50 border-gray-400 hover:border-none">
          More About Me
          <ArrowRight
            size={15}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-3"
          />
        </button>
      </div>
    </div>
  );
}
