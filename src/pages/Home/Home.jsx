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
      <div className="animated-background"></div>
      <Navigation />
      <div className="home-content">
        <h1>Welcome to the Event Management System</h1>
        <p>Here are few events in which you like to participate</p>
        <div className="events-grid">
          {/* Example event card */}
          <div className="event-card">
            <div className="event-details">
              <h2>Upcoming Event</h2>
              <p className="event-date">Date: Feb 14, 2025</p>
              <p className="event-description">
              It  is celebrated globally as Valentine's Day, along with other observances like Library Lovers Day, National Cream-Filled Chocolates Day, and National Organ Donor Day in the U.S.
              </p>
              <div className="event-buttons">
                <button className="btn-details">Details</button>
                <button className="btn-register">Register</button>
              </div>
            </div>
          </div>
          {/* Add more event cards as needed */}
          <div className="event-card">
            <div className="event-details">
              <h2>Another Event</h2>
              <p className="event-date">Date: Feb 10, 2025</p>
              <p className="event-description">
                Join us for another exciting event.
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
