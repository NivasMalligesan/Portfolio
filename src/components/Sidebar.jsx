import {
    Contact,
    FileStack,
    HomeIcon,
    LayoutDashboard,
    SquareStack,
    User2Icon,
    UserCircle,
  } from "lucide-react";
  import React from "react";
  import profile from "../../public/assets/profile.jpg";
  
  const Sidebar = () => {
    return (
      <div className="w-[280px]   h-full border-r border-r-gray-100 border-opacity-20 hidden lg:block">
        <div className="flex justify-center mt-10">
          <img
            src={profile}
            alt=""
            className="w-[200px] h-[200px] rounded-3xl"
          />
        </div>
        <div className="flex justify-center mt-6">
          <div className="text-green-300 px-6 py-2 bg-light_green rounded w-[200px] text-center">
            Available For Work
          </div>
        </div>
        <ul className="p-6">
          <li className="py-2 mt-3  cursor-pointer pr-3 hover:bg-zinc text-gray duration-300 hover:text-green-500 flex justify-start items-center pointer w-[200px] mx-auto rounded">
            <HomeIcon className="mr-4 ml-5" />
            Home
          </li>
          <li className="py-3 mt-3  cursor-pointer pr-3 hover:bg-zinc text-gray duration-300 hover:text-green-500 flex justify-start items-center pointer w-[200px] mx-auto rounded">
            <UserCircle className="mr-4 ml-5" />
            About
          </li>
          <li className="py-3 mt-3  cursor-pointer pr-3 hover:bg-zinc text-gray duration-300 hover:text-green-500 flex justify-start items-center pointer w-[200px] mx-auto rounded">
            <LayoutDashboard className="mr-4 ml-5"/>
            Projects
          </li>
          <li className="py-3 mt-3 cursor-pointer pr-3 hover:bg-zinc text-gray duration-300 hover:text-green-500 flex justify-start items-center pointer w-[200px] mx-auto rounded">
            <SquareStack className="mr-4 ml-5" />
            Tech Stack
          </li>
          <li className="py-3 mt-3  cursor-pointer pr-3 hover:bg-zinc text-gray duration-300 hover:text-green-500 flex justify-start items-center pointer w-[200px] mx-auto rounded">
            <Contact className="mr-4 ml-5" />
            Contact
          </li>
        </ul>

       
      </div>
    );
  };
  
  export default Sidebar;
  