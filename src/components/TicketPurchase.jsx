import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TicketPurchase() {
  const { eventId } = useParams();
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState(1);

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/payments/initialize', {
        email,
        amount: 1000, // Replace with actual ticket price
      });
      window.location.href = response.data.authorizationUrl;
    } catch (error) {
      console.error('Payment error:', error.response.data);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Purchase Ticket</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="number"
          placeholder="Number of tickets"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handlePayment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Pay with PayStack
        </button>
      </div>
    </div>
  );
}

export default TicketPurchase;