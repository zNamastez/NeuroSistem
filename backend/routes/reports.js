const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const Patient = require('../models/Patient');

// Create a new report
router.post('/', async (req, res) => {
  const { patientId, title, content } = req.body;
  const newReport = new Report({ patientId, title, content });
  await newReport.save();
  res.status(201).send(newReport);
});

// Get all reports
router.get('/', async (req, res) => {
  const reports = await Report.find().populate('patientId', 'name');
  res.status(200).send(reports);
});

// Get reports by patient
router.get('/patient/:patientId', async (req, res) => {
  const { patientId } = req.params;
  const reports = await Report.find({ patientId }).populate('patientId', 'name');
  res.status(200).send(reports);
});

module.exports = router;
