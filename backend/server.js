const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/neuro-system')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const patientsRoute = require('./routes/patients');
const appointmentsRoute = require('./routes/appointments');
const reportsRoute = require('./routes/reports');

app.use('/api/patients', patientsRoute);
app.use('/api/appointments', appointmentsRoute);
app.use('/api/reports', reportsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
