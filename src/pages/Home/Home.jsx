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
              <h2>Valentine's Day Event</h2>
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
           {/* Example event card */}
           <div className="event-card">
            <div className="event-details">
              <h2>Kala Ghoda Arts Festival (Mumbai) Event</h2>
              <p className="event-date">Date: Feb. 5. 2025
                to Feb. 13. 2025
              </p>
              <p className="event-description">
              Celebrating art, music, and cultural diversity​.
              </p>
              <div className="event-buttons">
                <button className="btn-details">Details</button>
                <button className="btn-register">Register</button>
              </div>
            </div>
          </div>
           {/* Example event card */}
           <div className="event-card">
            <div className="event-details">
              <h2>Surajkund Mela (Haryana) Event</h2>
              <p className="event-date">Date: Feb. 1. 2025
                to Feb. 15. 2025
              </p>
              <p className="event-description">
              A grand crafts fair showcasing India's rich handicrafts and cultural heritage.
              </p>
              <div className="event-buttons">
                <button className="btn-details">Details</button>
                <button className="btn-register">Register</button>
              </div>
            </div>
          </div>
           {/* Example event card */}
           <div className="event-card">
            <div className="event-details">
              <h2>Taj Mahotsav (Agra) Event</h2>
              <p className="event-date">Date: Feb. 18. 2025
                to Feb. 27. 2025
              </p>
              <p className="event-description">
              Celebrating art, craft, cuisine, and culture against the backdrop of the Taj Maha.
              </p>
              <div className="event-buttons">
                <button className="btn-details">Details</button>
                <button className="btn-register">Register</button>
              </div>
            </div>
          </div>
           {/* Example event card */}
           <div className="event-card">
            <div className="event-details">
              <h2>Mahashivratri Event</h2>
              <p className="event-date">Date: Feb. 26. 2025</p>
              <p className="event-description">
              A significant Hindu festival dedicated to Lord Shiva, celebrated across India​.
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
              <p className="event-date">Date: not decided will be notified soon</p>
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
