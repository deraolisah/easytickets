import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Checkout = () => {
  const { eventId } = useParams();
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState(1);

  const handlePayment = async () => {
    const response = await axios.post('/api/tickets/purchase', {
      eventId,
      email,
      tickets,
    });
    alert('Ticket purchased! Check your email for the QR code.');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of tickets"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
      />
      <button onClick={handlePayment}>Buy Tickets</button>
    </div>
  );
};

export default Checkout;