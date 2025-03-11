import "./Register.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="register-box"
      >
        <h2>Register for the Event</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <button onClick={() => navigate("/")}>Register Now</button>
      </motion.div>
    </div>
  );
};

export default Register;
