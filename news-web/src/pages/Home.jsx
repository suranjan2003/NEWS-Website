import React, { useState, useEffect } from 'react';
import LargeHome from './LargeHome'; // Home layout for larger devices
import SmallHome from './SmallHome'; // Home layout for smaller devices

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Handle window resize event
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize); // Add resize listener
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
  }, []);

  return (
    <div className='bg-black'>
      {/* Conditionally render SmallHome for small screens and LargeHome for larger screens */}
      {isSmallScreen ? <SmallHome /> : <LargeHome />}
    </div>
  );
};

export default Home;
