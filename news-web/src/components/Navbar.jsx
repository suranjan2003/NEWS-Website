import React, { useState, useEffect } from 'react'; 
import { FiSearch } from 'react-icons/fi'; // Import search icon from React Icons
import { FaBars } from 'react-icons/fa'; // Correctly import FaBars from react-icons/fa

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false); // State to toggle search bar visibility
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // State to manage screen size

  // Update the screen size state on resize
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center p-4 shadow-md bg-gray-100 relative">
        
        {/* Left: Search Icon for small screens */}
        <div className="block md:hidden">
          <FiSearch 
            size={24} 
            className="cursor-pointer text-gray-800" 
            onClick={() => setSearchVisible(!searchVisible)} // Toggle search bar visibility
          />
        </div>

        {/* Left: Search Bar for medium and large screens */}
        <div className="hidden md:block w-1/3">
          <input
            type="text"
            placeholder=" Search" // Space added before the placeholder text
            className="w-full p-2 pl-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        
        {/* Center: Company Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-14">
          <img 
            src={isSmallScreen ? "/images/logo.png" : "/images/logoimage.png"} // Use different images based on screen size
            alt="Company Logo" 
            className="h-full w-auto"
          />
        </div>

        {/* Right: Hamburger Menu for all devices */}
        <div className="cursor-pointer flex flex-col justify-between h-6 w-8 ml-auto">
          <FaBars size={20}/> {/* Hamburger icon */}
        </div>
      </nav>

      {/* Conditionally Render Search Bar on Small Screens */}
      {searchVisible && (
        <div className="block md:hidden p-4" style={{ 
            background: 'linear-gradient(to bottom, rgba(209, 213, 219, 0.9), rgba(209, 213, 219, 0.1))' // Gradient background
          }}>
          <input
            type="text"
            placeholder=" Search" // Space added before the placeholder text
            className="w-full p-2 pl-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
