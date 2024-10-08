import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate('/user');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="login-page">
    <div className="login-form-container">
      <h2>User Login</h2>
      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-field">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <button onClick={handleLogin}>Sign In</button>

      <div className="forgot-password">
        <p onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
      </div>

      <div className="register-link">
        <p onClick={() => navigate('/register')}>New User? Register</p>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
