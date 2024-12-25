import { ArrowRight } from "lucide-react";
import React from "react";

const ConnectArrow = () => {
  // Create an array of arrow icons
  const items = Array.from({ length: 10 }, () => <ArrowRight size={60} className="text-green-800" />);

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap shadow-inner">
      <div className="flex animate-scroll">
        {/* Render the array of arrow icons */}
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-block px-5 py-2 mx-10 sm:mx-28 rounded-md min-w-[50px] text-center ml-5"
          >
            {item}
          </div>
        ))}
        {/* Repeat items for seamless looping */}
        {items.map((item, index) => (
          <div
            key={`${index}-clone`}
            className="inline-block px-5 py-2 mx-10 sm:mx-28 rounded-md min-w-[50px] text-center"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Apply the inner shadow to both left and right sides */}
      <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-black to-transparent"></div>
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ConnectArrow;
