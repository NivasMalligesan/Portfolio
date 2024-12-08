import React from 'react';
import { FaHome, FaUserCircle, FaCube, FaProjectDiagram } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import MobileOptions, { MobileOptionItem } from './MobileOptions';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileTopBar = ({ isMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`w-full rounded-b-2xl lg:hidden  transform ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } duration-[300ms] ease-in-out bg-black`}
    >
      {isMenuOpen && ( // Only show mobile options if the menu is open
        <MobileOptions>
          <MobileOptionItem
            icon={<FaHome size={17} />}
            onClick={() => navigate('/home')}
            active={location.pathname === '/home'}
            text="Home"
          />
          <MobileOptionItem
            icon={<FaUserCircle size={17} />}
            onClick={() => navigate('/about')}
            active={location.pathname === '/about'}
            text="About"
          />
          <MobileOptionItem
            icon={<FaProjectDiagram size={17} />}
            onClick={() => navigate('/project')}
            active={location.pathname === '/project'}
            text="Project"
          />
          <MobileOptionItem
            icon={<FaCube size={17} />}
            onClick={() => navigate('/tech_stack')}
            active={location.pathname === '/tech_stack'}
            text="Tech Stack"
          />
          <MobileOptionItem
            icon={<IoCall size={17} />}
            onClick={() => navigate('/contact')}
            active={location.pathname === '/contact'}
            text="Contact"
          />
        </MobileOptions>
      )}
    </div>
  );
};

export default MobileTopBar;
