const Registration = require('../models/Registration'); // model we'll define next
const Event = require('../models/Event'); // make sure you have this
const User = require('../models/User'); // make sure you have this

// Register a user for an event
const registerForEvent = async (req, res) => {
  try {
    const { userId, event } = req.body;

    // Optional: Check if user already registered
    const existing = await Registration.findOne({ userId, eventId: event });
    if (existing) {
      return res.status(400).json({ msg: 'Already registered for this event' });
    }

    const registration = new Registration({
      userId,
      eventId: event,
    });

    await registration.save();
    res.status(201).json({ msg: 'Event registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all events registered by a user
const getUserRegistrations = async (req, res) => {
  try {
    const userId = req.params.userId;

    const registrations = await Registration.find({ userId }).populate('eventId');
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  registerForEvent,
  getUserRegistrations,
};
