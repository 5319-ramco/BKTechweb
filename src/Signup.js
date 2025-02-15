import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/dashboard');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <button className="green-button" onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;