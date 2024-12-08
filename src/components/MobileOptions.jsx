import React from 'react';

// MobileOptions component which renders children elements
const MobileOptions = ({ children }) => {
  return (
    <div className="w-full mt-2 ">
      <ul>{children}</ul>
    </div>
  );
};

// MobileOptionItem component for each menu item
export function MobileOptionItem({ icon, text, active, onClick }) {
  return (
    <li
      onClick={onClick}
      className={`py-3 mt-3 cursor-pointer group hover:bg-zinc flex justify-start items-center lg:w-[200px] mx-auto rounded duration-200 ${
        active ? 'bg-zinc' : ''
      }`}
    >
      {/* Icon with hover effects */}
      {icon && (
        <h1
          className={`mr-4 ml-5 duration-200 text-gray ${
            active ? 'text-white' : 'group-hover:text-green-500 group-hover:scale-125'
          }`}
        >
          {icon}
        </h1>
      )}
      <h1
        className={`text-sm duration-300 text-gray ${
          active ? 'text-white' : 'group-hover:text-green-500'
        }`}
      >
        {text}
      </h1>
    </li>
  );
}

export default MobileOptions;
