import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await axios.get('http://localhost:5000/api/reports');
      setReports(response.data);
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h2>Relatórios</h2>
      <ul>
        {reports.map(report => (
          <li key={report._id}>
            <h3>{report.title}</h3>
            <p>Paciente: {report.patientId.name}</p>
            <p>{report.content}</p>
            <p>{new Date(report.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
