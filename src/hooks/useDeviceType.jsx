import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the device is mobile based on the screen width
  const checkDeviceType = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Check device type on initial render
    checkDeviceType();

    // Add event listener for resizing the window
    window.addEventListener('resize', checkDeviceType);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return isMobile; // Return the device type (true for mobile, false for desktop)
};

export default useDeviceType;
