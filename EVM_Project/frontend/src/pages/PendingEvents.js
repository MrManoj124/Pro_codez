import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Register.css';

const PendingEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await axios.get('http://localhost:5000/api/events');
    const pending = res.data.filter(event => event.status === 'pending');
    setEvents(pending);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const endpoint = `http://localhost:5000/api/events/${id}/${action}`;
      await axios.put(endpoint);
      alert(`Event ${action}ed`);
      fetchEvents(); // refresh
    } catch (err) {
      alert('Error performing action');
    }
  };

  return (
    <div className="register-container">
      <h2>Pending Events</h2>
      {events.length === 0 ? <p>No pending events.</p> : (
        <ul>
          {events.map(event => (
            <li key={event._id}>
              <strong>{event.title}</strong><br />
              {event.description}<br />
              📅 {new Date(event.date).toLocaleDateString()}<br />
              📍 {event.venue}<br />
              <button onClick={() => handleAction(event._id, 'approve')}>✅ Approve</button>{' '}
              <button onClick={() => handleAction(event._id, 'reject')}>❌ Reject</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PendingEvents;
