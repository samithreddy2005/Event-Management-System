import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Array of background images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    //"https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    "https://static.vecteezy.com/system/resources/previews/029/332/550/non_2x/ai-generative-party-scene-from-a-festive-night-club-with-happy-people-and-friends-sony-a7s-realistic-image-free-photo.jpg",
    "https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-Event-Management-Companies-In-India.jpg",
    "https://convene.com/wp-content/uploads/2019/07/Convene-Hackathons-1-scaled.jpg",
    "https://uploads.lebonbon.fr/source/2023/april/2043806/acb5d4c2-febf-451c-9a64-7c042769fade_1_2000.jpg",
    //"https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  // Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "samith" && password === "Samith@123") {
      console.log("Login successful");
      setError("");
      navigate("/eventList");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <div className="links">
          <a href="#">Forgot Password?</a> | <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
