import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { Link } from 'react-router-dom';



const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      alert('Registered successfully!');
      console.log(res.data);
    } catch (err) {
      alert(err.response.data.msg || 'Registration failed');
    }
  };

  return (
  <div className="register-container">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option value="student">Student</option>
        <option value="organizer">Organizer</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>

    <p style={{ textAlign: 'center', marginTop: '10px' }}>
      Already have an account?< br /> <Link to="/login">Login here</Link>
    </p>
  </div>
);

};

export default Register;
