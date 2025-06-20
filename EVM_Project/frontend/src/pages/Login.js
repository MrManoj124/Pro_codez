import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // reuse same CSS for now
import { Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/users/login', formData);
    const { token, user } = res.data;

    // Store token and user role in localStorage
    localStorage.setItem('userId', user._id); // Save user ID
    localStorage.setItem('token', token);
    localStorage.setItem('role', user.role);
    

    alert('Login successful!');

    // Redirect based on role
    // Redirect based on role
if (user.role === 'organizer') {
  window.location.href = '/admin/pending-events';
} else if (user.role === 'admin') {
  window.location.href = '/create-event'; // Or wherever admin should go
} else if (user.role === 'student') {
  window.location.href = '/dashboard';
}

  } catch (err) {
    alert(err.response?.data?.msg || 'Login failed');
  }
};



  return (
  <div className="register-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>

    <p style={{ textAlign: 'center', marginTop: '10px' }}>
      Don't have an account?<br /> <Link to="/register">Register here</Link>
    </p>
  </div>
);

};

export default Login;
