import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Register.css';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/events');
        setEvents(res.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };
    fetchEvents();
  }, []);

  const handleRegister = async (eventId) => {
  const userId = '685283f0a76986ed3af15c2a'; // later decode from token
  try {
    await axios.post('http://localhost:5000/api/registrations', {
      userId,
      eventId
    });
    alert('Registered successfully!');
  } catch (err) {
    alert(err.response?.data?.msg || 'Registration failed');
  }
};


  return (
  <div className="register-container">
    <h2>All Events</h2>
    {events.length === 0 ? (
      <p>No events available</p>
    ) : (
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.title}</strong><br />
            {event.description}<br />
            📅 {new Date(event.date).toLocaleDateString()}<br />
            📍 {event.venue}<br />
            🏷️ Status: <em>{event.status}</em><br />

            {/* ✅ Show register button only if event is approved */}
            {event.status === 'approved' && (
              <button onClick={() => handleRegister(event._id)}>Register</button>
            )}

            <hr />
          </li>
        ))}
      </ul>
    )}
  </div>
);

};

export default EventList;
