import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // 👈 Essential for active state logic
import { assets } from "../assets/assets";

// --- Navigation Data (Mapping names to routes) ---
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Sections", path: "/sections" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "News & Events", path: "/news&events" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // --- Tailwind Classes for Active State ---
  // Base classes for all links
  const baseClasses = "hover:text-blue-200 transition duration-300";

  // Classes applied ONLY when the link is active
  const activeClasses = "font-bold border-b-2 border-teal-500";

  return (
    <nav className="absolute top-0 left-0 w-full z-10 py-2 md:py-4 px-6 md:px-12 text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Branding */}
        <div data-aos="fade-right" className="w-12 sm:w-15 p-1">
          <NavLink to="/">
            <img src={assets.logo} alt="" />
          </NavLink>
        </div>

        {/* 1. Desktop Navigation Links */}
        <div
          data-aos="fade-left"
          className="hidden lg:flex items-center space-x-6 text-sm"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              // NavLink function receives an object { isActive, isPending }
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : ""}`
              }
              // 'end' is crucial for the '/' path so it doesn't stay active on all routes
              end={item.path === "/"}
            >
              {item.name}
            </NavLink>
          ))}
          <button className="ml-4 px-4 py-2 bg-teal-500  hover:bg-teal-600 rounded-full text-white  transition duration-300 text-xs font-semibold cursor-pointer">
            <NavLink to="/admissions">Apply Now</NavLink>
          </button>
        </div>

        {/* 2. Mobile Menu Toggle Button (Font Awesome) */}
        <div data-aos="fade-left" className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl cursor-pointer">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Menu Dropdown */}
      <div
        className={`z-50 lg:hidden absolute top-full left-0 w-full bg-[#191d2d] bg-opacity-95 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-3 px-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleMenu} // Closes the menu on click
              className={({ isActive }) =>
                `block py-2 border-b border-[#191d2d] ${baseClasses} ${
                  isActive ? activeClasses : ""
                }`
              }
              end={item.path === "/"}
            >
              {item.name}
            </NavLink>
          ))}
          <button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mt-4 w-full px-4 py-2 bg-teal-500  hover:bg-teal-600  rounded-full text-white  transition duration-300 font-semibold cursor-pointer"
          >
            <NavLink to="/admissions">Apply Now</NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
