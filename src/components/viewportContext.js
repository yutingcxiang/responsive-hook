import React from 'react'

const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [size, setSize] = React.useState('');

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    const size = window.innerWidth <= 767 ? "mobile" : "desktop";
    setSize(size);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height, size }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height, size } = React.useContext(viewportContext);
  return { width, height, size };
}
