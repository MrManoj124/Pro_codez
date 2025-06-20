import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Register.css';

const MyRegistrations = () => {
  const [events, setEvents] = useState([]);
  const userId = localStorage.getItem('userId');


  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/registrations/${userId}`);
        setEvents(res.data);
      } catch (err) {
        console.error('Failed to fetch registrations', err);
      }
    };

    fetchMyEvents();
  }, []);

  return (
    <div className="register-container">
      <h2>My Registered Events</h2>
      {events.length === 0 ? (
        <p>You haven't registered for any events yet.</p>
      ) : (
        <ul>
          {events.map(reg => (
            <li key={reg._id}>
              <strong>{reg.eventId.title}</strong><br />
              {reg.eventId.description}<br />
              📅 {new Date(reg.eventId.date).toLocaleDateString()}<br />
              📍 {reg.eventId.venue}<br />
              ✅ Status: {reg.eventId.status}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyRegistrations;
