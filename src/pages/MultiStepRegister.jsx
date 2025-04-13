import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MultiStepRegister.css";

const MultiStepRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventData = location.state || {}; // Retrieve event data from state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { ...formData, ...eventData } });
  };

  return (
    <div className="register-bg">
      <div className="multi-step-container">
        <div className="step-header">
          <h2>Register for {eventData.name || "Event"}</h2>
          <p className="step-subtext">Step {step} of 2</p>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="input-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  required
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="terms-box">
                By registering, you agree to our <a href="#">Terms & Conditions</a>.
              </div>
            </>
          )}

          <div className="button-group">
            {step > 1 && (
              <button type="button" className="back-btn" onClick={prevStep}>
                Back
              </button>
            )}
            {step < 2 ? (
              <button type="button" className="next-btn" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button type="submit" className="next-btn">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepRegister;