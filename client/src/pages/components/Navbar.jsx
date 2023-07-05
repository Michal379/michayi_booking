import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="navbarContainer">
        <span className="logo">michayibooking</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navItems">
            <li className={`nav-item ${location.pathname === '/Home' ? 'active' : ''}`}>
              <Link to="/Home" className="navButton">
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/hotels' ? 'active' : ''}`}>
              <Link to="/hotels" className="navButton">
                Hotels
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/signin' ? 'active' : ''}`}>
              <Link to="/signin" className="navButton">
                Signin
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
              <Link to="/login" className="navButton">
                Login
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/aboutus' ? 'active' : ''}`}>
              <Link to="/aboutus" className="navButton">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
