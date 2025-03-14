import React from "react";
import { motion } from "framer-motion";
import "../components/Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulating a smooth payment transition
    setTimeout(() => {
      alert("✅ Payment Successful! 🎉");
      navigate("/");
    }, 1000);
  };

  return (
    <div className="payment-container">
      {/* Floating background elements for a futuristic payment look */}
      <div className="floating-payment"></div>
      <div className="floating-payment"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="payment-box glassmorphism"
      >
        <h2>💳 Secure Payment Gateway</h2>
        <p>Complete your transaction securely.</p>

        <motion.input
          type="text"
          placeholder="Cardholder Name"
          whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
        />
        <motion.input
          type="text"
          placeholder="Card Number"
          maxLength={16}
          whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
        />
        <div className="card-details">
          <motion.input
            type="text"
            placeholder="MM/YY"
            maxLength={5}
            whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
          />
          <motion.input
            type="password"
            placeholder="CVV"
            maxLength={3}
            whileFocus={{ scale: 1.02, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 180, 0.8)" }}
          whileTap={{ scale: 0.98 }}
          onClick={handlePayment}
          className="pay-now-button"
        >
          Pay Now 💸
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="secure-text"
        >
          🔒 100% Secure Payment Powered by EventPay™
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Payment;
