import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
    const [activeForm, setActiveForm] = useState('loginForm');
    const navigate = useNavigate(); // Initialize navigate

    const toggleForm = (formId) => {
        setActiveForm(formId);
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log('Google Login Success:', response);
        // Redirect to the home page on successful login
        navigate('/home');
    };

    const handleGoogleLoginFailure = (error) => {
        console.error('Google Login Failure:', error);
    };

    return (
        <GoogleOAuthProvider clientId="622012839307-3qdtdmte0lpd4lqd8qkje6qlpj906sga.apps.googleusercontent.com">
            <div className="container">
                <div className="promo-section">
                    <h2>For secure and joyful communication</h2>
                    <ul>
                        <li>Chat with your loved ones daily</li>
                        <li>Fast communication</li>
                        <li>Meet new people</li>
                        <li>Safe and reliable</li>
                    </ul>
                </div>

                {/* Login Form */}
                <div id="loginForm" className={`form-section ${activeForm === 'loginForm' ? 'active' : ''}`}>
                    <h2>Log In</h2>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                    
                    {/* Google Login Button */}
                    <div className="form-group">
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={handleGoogleLoginFailure}
                            text="continue_with"
                            shape="rectangular"
                        />
                    </div>

                    <div className="form-footer">
                        <a href="#">Forgot Password?</a>
                        <p>Don't have an account? <a href="#" onClick={() => toggleForm('signupForm')}>Sign up</a></p>
                    </div>
                </div>

                {/* Signup Form */}
                <div id="signupForm" className={`form-section ${activeForm === 'signupForm' ? 'active' : ''}`}>
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="First Name" required />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="terms">
                        By signing up you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    </div>
                    <div className="form-footer">
                        <p>Already have an account? <a href="#" onClick={() => toggleForm('loginForm')}>Log in</a></p>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default LoginSignup;
