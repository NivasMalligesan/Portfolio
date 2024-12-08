import React from "react";
import { FaChalkboardTeacher,FaProjectDiagram, FaDashcube, FaHome, FaServicestack, FaStackOverflow, FaStackpath, FaUser, FaUserAstronaut, FaUserCircle, FaFileContract } from "react-icons/fa";
import Sidebar, { SidebarItem } from "./Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCubesStacked } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const SideCommon = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-1">
      <Sidebar>
        <SidebarItem
          icon={<FaHome  size={17} />}
          onClick={() => navigate('/home')}
          active={location.pathname === '/home'}
          text="Home"
        />
        <SidebarItem
          icon={<FaUserCircle  size={17} />}
          onClick={() => navigate('/about')}
          active={location.pathname === '/about'}
          text="About"
        />
        <SidebarItem
          icon={<FaProjectDiagram   size={17} />}
          onClick={() => navigate('/project')}
          active={location.pathname === '/project'}
          text="Project"
        />
        <SidebarItem
          icon={<FaCubesStacked   size={17} />}
          onClick={() => navigate('/tech_stack')}
          active={location.pathname === '/tech_stack'}
          text="Tech Stack"
        />
        <SidebarItem
          icon={<IoCall  size={17} />}
          onClick={() => navigate('/contact')}
          active={location.pathname === '/contact'}
          text="Contact"
        />
        {/* Add more SidebarItems */}
      </Sidebar>
    </div>
  );
};

export default SideCommon;
