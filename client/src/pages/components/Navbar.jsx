import React from 'react'
import '../../App.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarContainer'>
        <span className='logo'>michayibooking</span>
        <div className='navItems'>
          <button className='navButton'>Signin</button>
          <button className='navButton'>Login</button>
          <button className='navButton'>About us</button>

        </div>
      </div>
    
    </div>
  )
}

export default Navbar