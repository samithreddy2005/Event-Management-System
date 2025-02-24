import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, heading, date, location, img }) => {
  return (
    <Link to={`/events/${id}`} className="event-card-link">
      <div className="card">
        <div className="card-content">
          <h3>🎉 Event Name: {heading}</h3>
          <p>
            <span>📅 Year: {date?.year || "Unknown"}</span>
            <span>📆 Month: {date?.month || "Unknown"}</span>
          </p>
          <p>📍 {location || "Location not available"}</p>
        </div>

        <div className="card-img-wrapper">
          <img src={img} alt={heading} />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
