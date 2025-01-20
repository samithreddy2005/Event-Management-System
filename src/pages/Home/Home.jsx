// FILE: src/pages/Home/Home.jsx
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <div className="home-content">
        <h1>Welcome to the Event Management System</h1>
        <p>Discover and manage events effortlessly.</p>
      </div>
    </div>
  );
};

export default Home;