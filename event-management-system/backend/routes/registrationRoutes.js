const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const Event = require('../models/Event');


router.post('/', async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    // prevent duplicate registrations
    const exists = await Registration.findOne({ userId, eventId });
    if (exists) return res.status(400).json({ msg: 'Already registered' });

    const reg = new Registration({ userId, eventId });
    await reg.save();

    res.status(201).json({ msg: 'Registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Registration failed', error: err.message });
  }
});

// GET all registrations for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const registrations = await Registration.find({ userId: req.params.userId })
      .populate('eventId'); // get full event data

    res.json(registrations);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch registrations' });
  }
});

module.exports = router;
