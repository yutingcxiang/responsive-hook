import React from 'react';
import { useWindowSize } from './useWindowSize';
import { useViewport } from './viewportContext';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';

const style = {
    textAlign: 'center',
    height: "100%",
}

const ResponsiveComponent = ({ children }) => {
//   const size = useWindowSize();
  const { size } = useViewport();

  const component = size === "mobile" ? 
    <MobileComponent>{children}</MobileComponent> : <DesktopComponent>{children}</DesktopComponent>;

  return <div style={style}>{component}</div>
}

export default ResponsiveComponent;
