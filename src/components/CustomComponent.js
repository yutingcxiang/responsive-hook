import React from 'react'
import logo from '../logo.svg'

const componentStyle = {
  height: '100vh',
  width: '100vw',
  fontWeight: 'bold',
}

const logoStyle = {
  margin: "0 auto",
  height: '255px',
  display: "block"
}

const CustomComponent = ( style ) => {
    React.useEffect(() => console.log(style))
  return (
    <div className='container' style={{ ...componentStyle, ...style }}>
      <img src={logo} className='logo' alt='logo' style={logoStyle} />
      <p>This is a responsive React page.</p>
    </div>
  )
}

export default CustomComponent
