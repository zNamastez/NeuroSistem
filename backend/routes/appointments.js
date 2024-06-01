const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');

// Create a new appointment
router.post('/', async (req, res) => {
  const { patientId, date, notes } = req.body;
  const newAppointment = new Appointment({ patientId, date, notes });
  await newAppointment.save();
  res.status(201).send(newAppointment);
});

// Get all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.find().populate('patientId', 'name');
  res.status(200).send(appointments);
});

module.exports = router;
