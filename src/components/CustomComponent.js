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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mauris vel libero rutrum ultrices. Duis vulputate nunc eu sapien rutrum efficitur. Nullam molestie erat non ullamcorper rhoncus. Quisque odio quam, ullamcorper sit amet tellus sit amet, euismod volutpat nibh. Nunc sagittis pellentesque neque, nec sodales lectus dictum id. Proin eu euismod sem. Phasellus nec convallis risus. Morbi id lacus ex.</p>
    </div>
  )
}

export default CustomComponent
