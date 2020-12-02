import React from 'react';
import { useWindowSize } from './useWindowSize';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const style = {
    textAlign: 'center'
}

const ResponsiveComponent = ({ children }) => {
  const size = useWindowSize();
  const mobileSizes = ['xs', 'sm'];
  const component = mobileSizes.includes(size) ? 
    <MobileComponent>{children}</MobileComponent> : <DesktopComponent>{children}</DesktopComponent>;

  return <div style={style}>{component}</div>
}

export default ResponsiveComponent;
