import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/patients', { name, age, contact });
    setName('');
    setAge('');
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Idade" required />
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contato" required />
      <button type="submit">Adicionar Paciente</button>
    </form>
  );
};

export default PatientForm;
