const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
// ✅ Include the event route
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);
app.use('/api/users', require('./routes/userRoutes'));

const registrationRoutes = require('./routes/registrationRoutes');
app.use('/api/registrations', registrationRoutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));
