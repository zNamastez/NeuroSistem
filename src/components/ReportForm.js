import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportForm = () => {
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get('http://localhost:5000/api/patients');
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/reports', { patientId, title, content });
    setPatientId('');
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={patientId} onChange={(e) => setPatientId(e.target.value)} required>
        <option value="">Selecione o Paciente</option>
        {patients.map(patient => (
          <option key={patient._id} value={patient._id}>{patient.name}</option>
        ))}
      </select>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Conteúdo" required />
      <button type="submit">Criar Relatório</button>
    </form>
  );
};

export default ReportForm;
