// FILE: src/pages/Home/Home.jsx
import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      // Remove particle after animation ends
      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    const handleMouseMove = (e) => {
      createParticle(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="background-effect"></div>
      <Navigation />
      <div className="home-content">
        <h1>Welcome to the Event Management System</h1>
        <p>Done by K. Samith Reddy and K. Varshith</p>
        <div className="events-grid">
          {/* Example event card */}
          <div className="event-card">
            <img
              className="event-image"
              src="https://via.placeholder.com/300"
              alt="Event"
            />
            <div className="event-details">
              <h2>Event Title</h2>
              <p className="event-date">Date: Jan 20, 2025</p>
              <p className="event-description">
                Discover exciting events that match your interests.
              </p>
              <div className="event-buttons">
                <button className="btn-details">Details</button>
                <button className="btn-register">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
