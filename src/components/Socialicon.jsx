import React from 'react';
import { Github, InstagramIcon, Linkedin, Mail } from 'lucide-react'; // Adjust imports as needed

export default function SocialIcons() {
  return (
    <div className="lg:mt-[80px]">
      <div className="flex items-center gap-5 justify-start mt-10 lg:mt-0">
        {/* LinkedIn Icon */}
        <div className="relative group">
          <Linkedin
            className="text-gray-500 hover:text-green-500 transition duration-300 transform hover:scale-110"
            size={20}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 text-xs text-green-500 bg-light_green rounded-md p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            LinkedIn
          </span>
        </div>

        {/* GitHub Icon */}
        <div className="relative group">
          <Github
            className="text-gray-500 hover:text-green-500 transition duration-300 transform hover:scale-110"
            size={20}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 text-xs text-green-500 bg-light_green rounded-md p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            GitHub
          </span>
        </div>

        {/* Email Icon */}
        <div className="relative group">
          <Mail
            className="text-gray-500 hover:text-green-500 transition duration-300 transform hover:scale-110"
            size={20}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 text-xs text-green-500 bg-light_green rounded-md p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            Email
          </span>
        </div>

        {/* Instagram Icon */}
        <div className="relative group">
          <InstagramIcon
            className="text-gray-500 hover:text-green-500 transition duration-300 transform hover:scale-110"
            size={20}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 text-xs text-green-500 bg-light_green rounded-md p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            Instagram
          </span>
        </div>
      </div>
    </div>
  );
}
