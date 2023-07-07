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
              <Link to="/" className="navButton">
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/hotels' ? 'active' : ''}`}>
              <Link to="/hotels" className="navButton">
                Hotels
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/signup' ? 'active' : ''}`}>
              <Link to="/signup" className="navButton">
                Sign up
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
              <Link to="/login" className="navButton">
                Login
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}>
              <Link to="/logout" className="navButton">
                Log out
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/aboutus' ? 'active' : ''}`}>
              <Link to="/aboutus" className="navButton">
                About us
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/booked' ? 'active' : ''}`}>
              <Link to="/booked" className="navButton">
                Booked
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
