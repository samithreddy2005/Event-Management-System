import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import 'font-awesome/css/font-awesome.min.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {/* Home icon */}
        <li>
          <Link to="/">
            <i className="fa fa-home"></i>
          </Link>
        </li>
        
        {/* Show Login only on the Home Page */}
        {location.pathname === '/' && (
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        )}
      </ul>

      {/* Sign Up Button */}
      <Link to="/signup" className="signup-button">Sign Up</Link>
    </nav>
  );
};

export default Navigation;
