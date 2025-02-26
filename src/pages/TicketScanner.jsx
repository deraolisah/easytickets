// frontend/src/pages/TicketScanner.js
import React, { useState } from 'react';
// import QrReader from 'react-qr-reader';
import axios from 'axios';

function TicketScanner() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleScan = async (data) => {
    if (data) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`http://localhost:5000/api/tickets/validate/${data}`, 
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setResult(response.data.message);
      } catch (error) {
        setError(error.response?.data?.error || 'An error occurred');
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError('Error scanning QR code');
  };

  return (
    <div>
      <h1>Ticket Scanner</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>{result}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default TicketScanner;