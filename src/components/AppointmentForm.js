import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get('http://localhost:5000/api/patients');
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', { patientId, date, notes });
    setPatientId('');
    setDate('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={patientId} onChange={(e) => setPatientId(e.target.value)} required>
        <option value="">Selecione o Paciente</option>
        {patients.map(patient => (
          <option key={patient._id} value={patient._id}>{patient.name}</option>
        ))}
      </select>
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notas" />
      <button type="submit">Agendar Consulta</button>
    </form>
  );
};

export default AppointmentForm;
