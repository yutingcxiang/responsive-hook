import React from 'react';

const headerStyle = {
    fontSize: '20px',
}

const childStyle = {
    backgroundColor: 'darkgrey',
    color: '#282c34',
    fontSize: '15px',
    "& img": {
        display: "inline"
      }
}


const MobileComponent = ({ children }) => (
    <>
        <h1 style={headerStyle}>Mobile View</h1>
        <div style={childStyle}>{children}</div>
    </>
);

export default MobileComponent;