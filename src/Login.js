import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button className="green-button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;