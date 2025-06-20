import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import EventList from './pages/EventList';
import PendingEvents from './pages/PendingEvents';
import MyRegistrations from './pages/MyRegistrations';
import EventReg from './pages/EventReg';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route
  path="/"
  element={
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      color: 'white',
      fontSize: '24px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      textAlign: 'center',
    }}>
      <h2>Welcome to University Event Management System</h2>
    </div>
  }
/>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/create-event" element={<CreateEvent />} />
  <Route path="/events" element={<EventList />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/admin/pending-events" element={<PendingEvents />} />
  <Route path="/my-registrations" element={<MyRegistrations />} />
  <Route path="/event-registration" element={<EventReg />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
