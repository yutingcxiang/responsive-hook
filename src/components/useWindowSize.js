import { useState, useEffect } from 'react';

// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState(undefined);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(getBreakPoint(window.innerWidth));
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};

//a Util function that will conver the absolute width into breakpoints
function getBreakPoint(windowWidth) {
    if (windowWidth) {
      if (windowWidth < 768) {
        return "xs";
      } else if (windowWidth < 1024) {
        return "sm";
      } else if (windowWidth < 1200) {
        return "med";
      } else {
        return "lg";
      }
    } else {
      return undefined;
    }
  }
