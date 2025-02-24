import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard.jsx";
import { eventList } from "../../utils/EventDatabase.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./EventList.css";

const EventList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".event-list");

    function revealOnScroll() {
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight * 0.85) {
          el.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on load

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="event-list-container"> {/* ✅ Added unique wrapper */}
      <Navigation />
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? (
            eventList.map(({ id, date, heading, location, img }) => (
              <EventCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location={location}
                img={img}
                onClick={() => handleEventClick(id)}
              />
            ))
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
