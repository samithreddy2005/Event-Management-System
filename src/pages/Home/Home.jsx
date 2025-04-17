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
        <p>Here are a few events in which you might like to participate</p>
        <div className="events-grid">
          
          {/* Valentine's Day Event */}
          <div className="event-card">
            <div className="event-card-inner">
              <div className="event-card-front">
                <h2>Valentine's Day Event</h2>
                <p className="event-date">Date: Feb 14, 2025</p>
              </div>
              <div className="event-card-back">
                <p>It is celebrated globally as Valentine's Day, along with other observances like Library Lovers Day. ❤️</p>
              </div>
            </div>
          </div>

          {/* Kala Ghoda Arts Festival */}
          <div className="event-card">
            <div className="event-card-inner">
              <div className="event-card-front">
                <h2>Kala Ghoda Arts Festival</h2>
                <p className="event-date">Date: Feb 5 - Feb 13, 2025</p>
              </div>
              <div className="event-card-back">
                <p>Celebrating art, music, and cultural diversity. 🎨</p>
              </div>
            </div>
          </div>

          {/* Surajkund Mela */}
          <div className="event-card">
            <div className="event-card-inner">
              <div className="event-card-front">
                <h2>Surajkund Mela</h2>
                <p className="event-date">Date: Feb 1 - Feb 15, 2025</p>
              </div>
              <div className="event-card-back">
                <p>A grand crafts fair showcasing India's rich handicrafts and cultural heritage. 🏺</p>
              </div>
            </div>
          </div>

          {/* Taj Mahotsav */}
          <div className="event-card">
            <div className="event-card-inner">
              <div className="event-card-front">
                <h2>Taj Mahotsav</h2>
                <p className="event-date">Date: Feb 18 - Feb 27, 2025</p>
              </div>
              <div className="event-card-back">
                <p>Celebrating art, craft, cuisine, and culture against the backdrop of the Taj Mahal. 🕌</p>
              </div>
            </div>
          </div>

          {/* Mahashivratri */}
          <div className="event-card">
            <div className="event-card-inner">
              <div className="event-card-front">
                <h2>Mahashivratri</h2>
                <p className="event-date">Date: Feb 26, 2025</p>
              </div>
              <div className="event-card-back">
                <p>A significant Hindu festival dedicated to Lord Shiva, celebrated across India. 🕉️</p>
              </div>
            </div>
          </div>

          {/* Another Event */}
          <div className="event-card">
            <div className="event-card-inner">
              <div className="event-card-front">
                <h2>Another Event</h2>
                <p className="event-date">Date: To be notified soon</p>
              </div>
              <div className="event-card-back">
                <p>Join us for another exciting event! 🎉</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
