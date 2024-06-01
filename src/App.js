import React from 'react';
import './App.css';
import PatientForm from './components/PatientForm';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import ReportForm from './components/ReportForm';
import ReportList from './components/ReportList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema Neuropsicopedagógico</h1>
        <PatientForm />
        <AppointmentForm />
        <AppointmentList />
        <ReportForm />
        <ReportList />
      </header>
    </div>
  );
}

export default App;
