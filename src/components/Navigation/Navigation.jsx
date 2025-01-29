import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
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