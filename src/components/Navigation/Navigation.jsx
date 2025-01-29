import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

import 'font-awesome/css/font-awesome.min.css'; 

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li>
          <Link to="/"><i className="fa fa-home"></i> </Link> {/* Home icon */}
        </li>
                {/* Other navigation links */}
        {location.pathname === '/' && (
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;