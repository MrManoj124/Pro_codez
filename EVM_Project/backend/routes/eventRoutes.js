const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.post('/', async (req, res) => {
  try {
    const { title, description, date, venue, organizerId } = req.body;

    const newEvent = new Event({
      title,
      description,
      date,
      venue,
      organizerId,
      status: 'pending'
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    console.error('Event creation failed:', err);
    res.status(500).json({ msg: 'Event creation failed', error: err.message });
  }
});

// GET /api/events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 }); // Upcoming first
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch events' });
  }
});

// PUT /api/events/:id/approve
router.put('/:id/approve', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    res.json(event);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to approve event' });
  }
});

// PUT /api/events/:id/reject
router.put('/:id/reject', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected' },
      { new: true }
    );
    res.json(event);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to reject event' });
  }
});



module.exports = router;
