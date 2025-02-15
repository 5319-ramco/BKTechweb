import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <nav className="horizontal-menu">
        <div className="menu-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#address">Address</a>
        </div>
        <div className="logout-link">
          <a href="#logout" onClick={handleLogout}>Logout</a>
        </div>
      </nav>
      <h2>Welcome to the Dashboard</h2>
    </div>
  );
}

export default Dashboard;