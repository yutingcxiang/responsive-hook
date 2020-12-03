import React from 'react'
import logo from '../logo.svg'

const componentStyle = {
  height: '100vh',
  width: '100vw',
  fontWeight: 'bold',
}

const logoStyle = {
  height: '200px',
  display: "inline"
}

const CustomComponent = ({ style }) => {
  return (
    <div className='container' style={{ ...componentStyle, ...style }}>
      <img src={logo} className='App-logo-1' alt='logo' style={logoStyle} />
      <img src={logo} className='App-logo-1' alt='logo' style={logoStyle} />
      <p>This is a responsive React page.</p>
    </div>
  )
}

export default CustomComponent
