import React from 'react';
import './LoginOption.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/footer';

const LoginOption = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'User') {
      navigate('/login-user');
    } else {
      navigate('/login-admin-reviewer', { state: { role } }); 
    }
  };
  return (
    <>
    <Navbar/>
    <div className="login-option-page">
      <div className="login-option-page__logo">
        <img src={logo} alt="Logo" />
        
      </div>
      <h2>SELECT YOUR ROLE TO LOGIN</h2>
      <div className="login-option-page__options">
        <div className="login-option" onClick={() => handleLogin('User')}>
          <span>User</span>
        </div>
        <div className="login-option" onClick={() => handleLogin('Reviewer')}>
          <span>Reviewer</span>
        </div>
        <div className="login-option" onClick={() => handleLogin('Admin')}>
          <span>Admin</span>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginOption;
