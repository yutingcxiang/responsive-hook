import React from 'react';

const headerStyle = {
    fontSize: '20px',
}

const childStyle = {
    backgroundColor: 'darkgrey',
    color: '#282c34',
    fontSize: '15px',
}

const MobileComponent = ({ children }) => (
    <div>
        <h1 style={headerStyle}>Mobile View</h1>
        <div style={childStyle}>{children}</div>
    </div>
);

export default MobileComponent;