const express = require('express');
const router = express.Router();
const { registerForEvent, getUserRegistrations } = require('../controllers/registrationController');

router.post('/', registerForEvent); // POST /api/registrations
router.get('/:userId', getUserRegistrations); // GET /api/registrations/:userId

module.exports = router;
