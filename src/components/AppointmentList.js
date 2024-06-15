import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(response.data);
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Consultas Agendadas</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>
            {appointment.patientId.name} - {new Date(appointment.date).toLocaleString()} - {appointment.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
