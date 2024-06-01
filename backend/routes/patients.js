const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

router.post('/', async (req, res) => {
  const { name, age, contact } = req.body;
  const newPatient = new Patient({ name, age, contact });
  await newPatient.save();
  res.status(201).send(newPatient);
});

router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.status(200).send(patients);
});

module.exports = router;
