import { ArrowRight } from "lucide-react";
import React from "react";

const HorizontalLoop = () => {
  // Create an array of arrow icons
  const items = Array.from({ length: 10 }, () => <ArrowRight size={30} color="green" />);

  return (
    <div className="hidden group-hover:flex relative w-1/3 overflow-hidden whitespace-nowrap shadow-inner">
      <div className="flex animate-scroll">
        {/* Render the array of arrow icons */}
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-block px-2 py-2 mx-1 rounded-md min-w-[50px] text-center"
          >
            {item}
          </div>
        ))}
        {/* Repeat items for seamless looping */}
        {items.map((item, index) => (
          <div
            key={`${index}-clone`}
            className="inline-block px-2 py-2 mx-1 rounded-md min-w-[50px] text-center"
          >
            {item}
          </div>
        ))}
      </div>
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

export default HorizontalLoop;
