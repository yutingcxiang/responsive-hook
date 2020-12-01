import React from 'react';
import { useWindowSize } from './useWindowSize';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const ResponsiveComponent = ({ children }) => {
  const size = useWindowSize();
  const mobileSizes = ['xs', 'sm'];

  return mobileSizes.includes(size) ? 
    <MobileComponent >{children}</MobileComponent> : <DesktopComponent >{children}</DesktopComponent>;
}

export default ResponsiveComponent;
