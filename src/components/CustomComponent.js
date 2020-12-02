import React from 'react';
import logo from '../logo.svg';

const CustomComponent = ({ style }) =>
  <header className='App-header' style={style} >
    <img src={logo} className='App-logo' alt='logo' />
    <p>This is a responsive React page.</p>
  </header>

export default CustomComponent;
