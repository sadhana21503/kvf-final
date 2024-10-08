import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LoginOption from './pages/loginoption/LoginOption';
import './App.scss';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './components/forgotpass/ForgotPassword';
import ARLogin from './pages/Login/ARlogin';
import NewComp from './pages/user/forms/newcomp';
import Compliance from './pages/user/forms/Compliance';
import User from './pages/user/dashboard/User';
import ReviewDashBoard from './pages/reviewer/dashboard/ReviewDashBoard';
import AdminDashBoard from './pages/admin/AdminDashBoard';
const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/updates-acts" element={<UpdatesActs />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/case-studies-reports" element={<CaseStudiesReports />} /> */}
        <Route path="/login-user" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<LoginOption />} />
        <Route path="/login-admin-reviewer" element={<ARLogin />} />
        <Route path='/newcomp' element={<NewComp />} />
        <Route path='/comp' element={<Compliance />} />
        <Route path='/user' element={<User/>} />
        {/* <Route path='/cal' element={<Calender />} /> */}
        <Route path='/reviewer' element={<ReviewDashBoard />} />
        <Route path='/admin' element={<AdminDashBoard />} />

      </Routes>
    </Router>
  );
};

export default App;
