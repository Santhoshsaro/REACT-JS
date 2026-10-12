import React from 'react'

export default function Navbar() {
  return (

<nav className='navbar'>
    <h2 className='logo'>Websites</h2>
    <div className='nav-links'>
        <Navlink to="/" >Home</Navlink>

        <Navlink to="/about">About</Navlink>

        <Navlink to="/service">Services</Navlink>

        <Navlink to="/products">Products</Navlink>
        
        <Navlink to="/contacts">Contacts</Navlink>
    </div>
    
</nav>

  )
}
