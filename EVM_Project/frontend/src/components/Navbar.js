import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar-logo">🎓 Event Manager</h3>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        {/* <li><Link to="/create-event">Create Event</Link></li>
        <li><Link to="/events">View Events</Link></li>
        <li><Link to="/admin/pending-events">Pending Events</Link></li>
        <li><Link to="/my-registrations">My Events</Link></li> 
        <li><Link to="/event-registration">Event Register</Link></li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
