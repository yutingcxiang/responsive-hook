import React from 'react';

const childStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '20px',
}

const headerStyle = {
    color: '#282c34',
}

const DesktopComponent = ({ children }) => (
    <>
        <h1 style={headerStyle}>Desktop View</h1>
        <div style={childStyle}>{children}</div>
    </>
);

export default DesktopComponent;