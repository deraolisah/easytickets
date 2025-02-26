// // frontend/src/pages/EventList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function EventList() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/events');
//         setEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <h1>Events</h1>
//       {events.map((event) => (
//         <div key={event._id}>
//           <h2>{event.title}</h2>
//           <p>{event.description}</p>
//           <p>Date: {new Date(event.date).toLocaleDateString()}</p>
//           <p>Location: {event.location}</p>
//           <Link to={`/purchase-ticket/${event._id}`}>Purchase Ticket</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default EventList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:px-0">
      <h2 className="text-2xl font-bold mb-6">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Date:</span> {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Location:</span> {event.location}
            </p>
            <Link
              to={`/purchase-ticket/${event._id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Purchase Ticket
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;