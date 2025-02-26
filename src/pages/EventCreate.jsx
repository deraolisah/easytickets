// frontend/src/pages/EventCreate.js
import React, { useState } from 'react';
import axios from 'axios';

function EventCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [totalTickets, setTotalTickets] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/events', 
        { title, description, date, location, ticketPrice, totalTickets },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Redirect to events page or show success message
    } catch (error) {
      console.error('Error creating event:', error.response.data);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8 md:px-0'>
    <form onSubmit={handleSubmit} className='text-center relative bg-primary/10 flex flex-col gap-4 w-full max-w-[540px] mx-auto px-3 py-4 rounded-lg'>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Event Title" 
        required 
        className='bg-white w-full p-2 pl-3 rounded-md'
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} placeholder="Event Description" 
        required
        className='bg-white w-full p-2 pl-3 rounded-md'
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
        className='bg-white w-full p-2 pl-3 rounded-md'
      />
      <input 
        type="text"
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Event Location" 
        required
        className='bg-white w-full p-2 pl-3 rounded-md'
      />
      <input 
        type="number" 
        value={ticketPrice} 
        onChange={(e) => setTicketPrice(e.target.value)} placeholder="Ticket Price" 
        required
        className='bg-white w-full p-2 pl-3 rounded-md'
      />
      <input 
        type="number" 
        value={totalTickets} 
        onChange={(e) => setTotalTickets(e.target.value)} placeholder="Total Tickets" 
        required
        className='bg-white w-full p-2 pl-3 rounded-md'
      />
      <button type="submit" className='bg-primary w-fit p-2 px-4 mx-auto rounded-md cursor-pointer text-white hover:bg-primary/80'>
        Create Event
      </button>
    </form>
    </div>
  );
}

export default EventCreate;