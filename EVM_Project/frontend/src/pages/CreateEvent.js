import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Reuse styling

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    venue: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      if (role !== 'organizer' && role !== 'admin') {
        alert('Only organizers or admins can create events.');
        return;
      }

      await axios.post('http://localhost:5000/api/events', {
        ...formData,
        organizerId: '685283f0a76986ed3af15c2a' // (Later replace with logged in user's id from token)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('Event created successfully!');
    } catch (err) {
  console.log('--- ERROR RESPONSE START ---');
  console.error(err.response); // ✅ This shows HTTP error info
  console.log('--- ERROR RESPONSE END ---');

  alert(err.response?.data?.msg || 'Error creating event');
    }

  };

  return (
    <div className="register-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="description" placeholder="Description" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="venue" placeholder="Venue" onChange={handleChange} required />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
