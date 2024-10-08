import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import './ARLogin.scss';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/footer';

const ARLogin = () => {
  const { state } = useLocation();
  const { role } = state || {};
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if ((role === 'Admin' && username === 'admin' && password === 'password123')) {
      navigate('/admin'); 
    } else if ((role === 'Reviewer' && username === 'reviewer' && password === 'password123')) {
      navigate('/reviewer'); 
    } else {
      alert('Invalid credentials'); 
    }
  };

  return (
    <>
    <Navbar/>
    <div className="login-page">
      <div className="login-form-container">
        <h2>{role} Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username"
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ARLogin;
