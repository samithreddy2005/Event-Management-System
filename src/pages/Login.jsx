import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State to handle error messages
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate the credentials
        if (username === "samith" && password === "Samith@123") {
            console.log("Login successful");
            setError(""); // Clear any error messages
            navigate("/eventList"); // Redirect to events page
        } else {
            setError("Invalid username or password"); // Display error message
        }
    };

    return (
        <div className="login-container">
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
                    {error && <p className="error-message">{error}</p>} {/* Display error if any */}
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
