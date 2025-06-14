import React from "react";
import profile from "../../public/assets/profile.jpg";

const Sidebar = ({ children }) => {
  return (
    <div className="w-[280px] fixed h-full border-r border-r-gray-100 border-opacity-20 hidden lg:block">
      <div className="flex justify-center mt-5">
        <img
        src={profile}
        alt=""
        className="w-[200px] h-[200px] rounded-3xl filter grayscale hover:grayscale-0 transition duration-300"
        />

      </div>
      <div className="flex justify-center mt-6">
        <div className="text-green-300 px-6 py-2 bg-light_green rounded w-[200px] text-center">
          Available For Work
        </div>
      </div>
      <ul className="px-6">{children}</ul>
    </div>
  );
};

export default Sidebar;

export function SidebarItem({ icon, text, active, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`py-3 mt-3 cursor-pointer pr-3 group flex justify-start items-center w-[200px] mx-auto rounded duration-200 ${
        active ? "bg-zinc" : ""
      }`}
    >
      {/* Change icon color on hover */}
      {icon && (
        <h1
          className={`mr-4 ml-5 duration-200 text-gray ${
            active ? "text-white  " : " group-hover:text-green-500 group-hover:scale-125"
          }`}
        >
          {icon}
        </h1>
      )}
      <h1
        className={`text-sm duration-300 text-gray ${
          active ? "text-white" : "group-hover:text-green-500"
        }`}
      >
        {text}
      </h1>
    </li>
  );
}
