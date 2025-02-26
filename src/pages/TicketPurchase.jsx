// frontend/src/pages/TicketPurchase.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key');

function CheckoutForm({ eventId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const token = localStorage.getItem('token');
      const { data: { clientSecret } } = await axios.post('http://localhost:5000/api/payments/create-payment-intent', 
        { eventId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        // Purchase ticket
        await axios.post('http://localhost:5000/api/tickets/purchase', 
          { eventId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // Show success message or redirect
      }
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe || processing}>
        Pay
      </button>
    </form>
  );
}

function TicketPurchase() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };
    fetchEvent();
  }, [eventId]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h1>Purchase Ticket for {event.title}</h1>
      <p>Price: ${event.ticketPrice}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm eventId={eventId} />
      </Elements>
    </div>
  );
}

export default TicketPurchase;