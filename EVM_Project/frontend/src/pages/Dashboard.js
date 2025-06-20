import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();


 return (
  <div className="register-container">
    <h2>{role?.toUpperCase()} Dashboard</h2>
    <p>Welcome! You are logged in as a <strong>{role}</strong>.</p>

    {/* ✅ Show only for students */}
    {role === 'student' && (
      <button
        onClick={() => navigate('/event-registration')}
        style={{ marginBottom: '15px', marginTop: '10px' }}
      >
        🎫 Register Event
      </button>
    )}

    <button
      onClick={() => {
        localStorage.clear();
        window.location.href = '/login';
      }}
    >
      Logout
    </button>
  </div>
);

};

export default Dashboard;
