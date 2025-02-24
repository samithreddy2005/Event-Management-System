import { useParams } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);

  // Find event by ID
  const filteredEvent = eventList.find(eventDetail => eventDetail.id === numId);

  // Handle case where event is not found
  if (!filteredEvent) {
    return (
      <div className="event-details-container">
        <Navigation />
        <h2 className="not-found">🚨 Event Not Found! 😕</h2>
      </div>
    );
  }

  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt={filteredEvent.heading} />
        <div className="event-details-content">
          <h3>🎉 Event Name: {filteredEvent.heading}</h3>

          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date?.month || "Unknown Month"}
              </span>
              <span className="font-weight-med">
                {filteredEvent.date?.year || "Unknown Year"}
              </span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location || "Unknown Location"}
            </p>
          </div>

          <p className="description">
            <span className="description-heading">📜 Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description || "No description available."}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
