import React from 'react';
import { Github, InstagramIcon, Linkedin, Mail } from 'lucide-react'; // Adjust imports as needed

export default function SocialIcons() {
  return (
    <div className="lg:mt-[80px]">
      <div className="flex items-center gap-5 justify-start mt-10 lg:mt-0">
        {/* LinkedIn Icon */}
        <a className="relative group" href='https://www.linkedin.com/in/nivas-malligesan-419243292/' target='blank'>
          <Linkedin
            className="text-gray-500 hover:text-green-500 transition duration-300 transform hover:scale-110"
            size={20}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 text-xs text-green-500 bg-light_green rounded-md p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            LinkedIn
          </span>
        </a>

        {/* GitHub Icon */}
        <a className="relative group" target='blank' href='https://github.com/NivasMalligesan'>
          <Github
            className="text-gray-500 hover:text-green-500 transition duration-300 transform hover:scale-110"
            size={20}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 text-xs text-green-500 bg-light_green rounded-md p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            GitHub
          </span>
        </a>

        {/* Email Icon */}
        <a className="relative group" href='mailto:nivasmalligesan@gmail.com'>
          <Mail
            className="text-gray-500 hover:text-green-500 transition duration-300 transform hover:scale-110"
            size={20}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 text-xs text-green-500 bg-light_green rounded-md p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            Email
          </span>
        </a>

        {/* Instagram Icon */}
        <a className="relative group" href="https://www.instagram.com/nivas_ig/profilecard/?igsh=MWVhejQ2OXM2a2F3eQ==" target='blank'>
          <InstagramIcon
            className="text-gray-500 hover:text-green-500 transition duration-300 transform hover:scale-110"
            size={20}
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 text-xs text-green-500 bg-light_green rounded-md p-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
            Instagram
          </span>
        </a>
      </div>
    </div>
  );
}
