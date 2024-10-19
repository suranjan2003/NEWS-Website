import React from 'react';
import { FaHome, FaList, FaUser } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom'; // Import Link for navigation

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden"> {/* Show only on small devices */}
      <ul className="flex justify-around items-center p-2">
        
        {/* Categories Icon */}
        <li className="flex flex-col items-center text-gray-700 flex-1">
          <FaList className="text-lg sm:text-xl" /> {/* Responsive icon size */}
          <span className="text-xs sm:text-sm">Categories</span>
        </li>

        {/* Home Icon */}
        <li className="flex flex-col items-center text-gray-700 flex-1">
          <Link to="/" className="flex flex-col items-center">
            <FaHome className="text-lg sm:text-xl" /> {/* Responsive icon size */}
            <span className="text-xs sm:text-sm">Home</span>
          </Link>
        </li>

        {/* Profile Icon */}
        <li className="flex flex-col items-center text-gray-700 flex-1">
          <Link to="/profile" className="flex flex-col items-center">
            <FaUser className="text-lg sm:text-xl" /> {/* Responsive icon size */}
            <span className="text-xs sm:text-sm">Profile</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default BottomNav;
