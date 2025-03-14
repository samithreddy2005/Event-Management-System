import "./Register.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    entryPasses: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      alert(response.data.message);

      // ✅ Redirect to Payment Page After Successful Registration
      navigate("/payment");
    } catch (error) {
      alert("❌ Registration Failed!");
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-container">
      {/* Floating elements for cool effects */}
      <div className="floating"></div>
      <div className="floating"></div>
      <div className="floating"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="register-box"
      >
        <h2>🎉 Register for the Exciting Event</h2>

        <motion.input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
        />
        <motion.input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={formData.whatsapp}
          onChange={handleChange}
          whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
        />
        <motion.input
          type="number"
          name="entryPasses"
          placeholder="No. of Entry Passes"
          value={formData.entryPasses}
          onChange={handleChange}
          whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
        />

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 180, 0.8)" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
        >
          Register Now 
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Register;
