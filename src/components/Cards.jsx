import { ArrowRight } from 'lucide-react';
import React from 'react';
import heroVideo from '../../public/assets/heroVideo.mp4';

export default function CardWithImageExample() {
  return (
    <div
      className="md:mt-4 md:w-[20rem] md:h-[20rem]  rounded-lg overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      
      <video 
        autoPlay 
        loop 
        muted 
        preload="auto" 
        playsInline 
        className="w-full h-full object-cover">
        <source src={heroVideo} />
      </video>
      
      
    </div>
  );
}
