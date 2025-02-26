import React from 'react';
import { GiTicket } from "react-icons/gi";
import { events } from '../assets/data';
import { Link } from "react-router-dom";


const NewlyAdded = () => {

  const newEvents = events.filter(event => event.new === true); 


  return (
    <div className="container mx-auto px-4 md:px-0 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
        Newly Added Events
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {newEvents.map((event) => (
          <Link
            to={`/events/${event.id}`}
            key={event.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-sm"
            title={event.title}>
            <img
              src={event.image}
              alt=""
              className="w-full h-auto flex flex-1 object-cover object-center" />
            <div className="p-4 md:p-6 bg-white">
              <h3 className="text-md md:text-lg font-semibold truncate mb-2">
                {event.title}
              </h3>
              <p className="bg-primary/10 w-fit px-2 py-1 text-xs rounded-sm mb-2">
                {" "}
                {event.theme}{" "}
              </p>
              <p className="text-gray-600 text-xs md:text-sm mb-2">
                <span className="font-medium"></span>
                {event.date}
                {/* {new Date(event.date).toLocaleDateString()} */}
              </p>
              <p className="text-gray-600 text-xs md:text-sm">
                <span className="font-medium"></span> {event.location}
              </p>
              {/* <div className="text-primary hover:text-primary/80 text-sm transition duration-300 flex items-center gap-1 w-fit">
                <GiTicket className="text-lg" />
                {event.price}
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NewlyAdded;