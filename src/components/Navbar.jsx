import React, { useState } from 'react';
import { ListMinus } from 'lucide-react';
import profile from '../../public/assets/profile.jpg';
import MobileTopBar from './MobileTopBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for toggling the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // toggle the state
  };

  return (
    <>
      <nav className="flex-row md:flex justify-between items-center p-5 sticky inset-0 z-50 bg-black">
        <div className="flex justify-between items-center w-full">
          <div className="flex lg:justify-between items-center lg:ml-3 w-full">
            <div className="flex items-center justify-between">
              <img src={profile} alt="Profile" className="rounded-full w-10 h-10" />
              <h1 className="text-xl ml-2 hidden md:block text-white">Nivas Malligesan</h1>
            </div>
            <div className="text-green-300 px-4 md:px-6 md:py-2 py-1 bg-light_green rounded ml-4 md:block">
              Available For Work
            </div>
          </div>
          <ListMinus
            className="text-white cursor-pointer lg:hidden"
            onClick={toggleMenu} // Trigger the menu toggle on click
          />
        </div>
      </nav>

      {/* MobileTopBar is now below the Navbar */}
      <MobileTopBar isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;
