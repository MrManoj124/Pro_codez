import React, { useState } from 'react';
import './Register.css';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    regNumber: '',
    password: '',
    confirmPassword: '',
    phone: '',
    event: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Submit logic here (e.g., axios.post)
    console.log('Submitted Data:', formData);
    alert('Event registration successful!');
  };

  return (
    <div className="register-container">
      <h2>Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="regNumber"
          placeholder="Registration Number"
          value={formData.regNumber}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select name="event" value={formData.event} onChange={handleChange} required>
          <option value="">-- Select Event --</option>
          <option value="Thaipongal">Thaipongal</option>
          <option value="cultural_day">Cultural Day</option>
          <option value="New Year">New Year</option>
        </select>

        {/* <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Gender:</label>
          <label style={{ marginRight: '10px' }}>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            /> Female
          </label>
        </div> */}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default EventRegistration;
