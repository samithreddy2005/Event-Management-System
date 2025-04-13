import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, phone, ...eventData } = location.state || {};

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h1>Registration Successful!</h1>
        <p>
          Your ticket has been sent to your WhatsApp number ({phone || "N/A"}). You
          can also view and download it below.
        </p>

        <div className="ticket-details">
          <h2>{eventData.name || "Event Name"}</h2>
          <p>Ticket #9A1X8U</p>
          <p><strong>Attendee:</strong> {name || "N/A"}</p>
          <p><strong>Date:</strong> {eventData.date || "N/A"}</p>
          <p><strong>Time:</strong> {eventData.time || "N/A"}</p>
          <p><strong>Location:</strong> {eventData.location || "N/A"}</p>
          <div className="qr-code">
            <img
              src="https://via.placeholder.com/150"
              alt="QR Code"
            />
            <p>Scan to verify attendance</p>
          </div>
        </div>

        <div className="actions">
          <button className="download-btn">Download Ticket</button>
          <button
            className="explore-btn"
            onClick={() => navigate("/eventList")}
          >
            Explore More Events
          </button>
        </div>

        <p className="email-confirmation">
          An email confirmation has been sent to <strong>{email || "N/A"}</strong>.
        </p>
        <button className="home-btn" onClick={() => navigate("/")}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;