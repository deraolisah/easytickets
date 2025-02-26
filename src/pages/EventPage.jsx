import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { events } from "../assets/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { HiMiniShare } from "react-icons/hi2";


const EventPage = () => {
  const { eventId } = useParams();
  

  // Fetch the event data from the json file
  const event = events.find((event) => event.id === parseInt(eventId));


  useEffect(() => {
    document.title = `Easy Tickets | ${event.title}`;
  }, [event.title]);

  // console.log(eventId);
  // console.log(event.title);

  return (
    <div className='container mx-auto px-4 py-2 md:py-8 md:px-0'>
      {/* BREADCRUMBS */}
      <div className='flex breadcrumbs my-4 text-xs'>
        <Link to="/" className='text-gray-500 hover:text-gray-900'>
          Home
        </Link>
        <span className='mx-2 text-gray-500'>/</span>
        <a href='#' className='text-gray-500 hover:text-gray-900'>
          Events
        </a>
        <span className='mx-2 text-gray-500'>/</span>
        <span className='text-gray-900'>{event.title}</span>
      </div>


      {/* JUMBOTRON */}
      <div className='flex flex-col md:flex-row items-center justify-center mb-8 gap-0 relative rounded-lg overflow-hidden shadow-xl'>
        <img src={event.image} alt={event.title} className='relative md:w-64 min-h-100 md:min-h-fit bg-gray-500' />

        <div className='absolute md:relative w-full h-full md:h-auto z-2 md:p-6 pt-6 bg-white/40 md:text-left flex flex-col justify-end gap-12 md:gap-2'
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}>
          <div className='w-full flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex flex-col space-y-2'>
              <h3 className='text-md md:text-2xl text-center md:text-left font-bold'>{event.title}</h3>
              <p className='flex gap-1.5 items-center justify-center md:justify-start text-center md:text-left text-sm'> <FaMapMarkerAlt className='text-xs -mt-0.5' /> {event.location}</p>
              <p className='flex gap-1.5 items-center justify-center md:justify-start text-sm'> <BsFillCalendarWeekFill className='text-xs -mt-0.5' /> {event.date} - {event.time} </p>
              <p className='bg-primary/20 w-fit mx-auto md:mx-0 py-1 px-2 text-xs rounded-xs'> 
                {event.theme} 
              </p>
            </div>

            <div className='h-full flex flex-col justify-between gap-4'>
              <div>
                <h2 className='text-xl font-bold text-primary flex gap-x-4'>
                  <span> 00 </span> : 
                  <span> 00 </span> : 
                  <span> 00 </span> :
                  <span> 00 </span>
                </h2>
                <p className='flex gap-4 uppercase'>
                  <span> Days </span>
                  <span> Hrs </span>
                  <span> Mins </span>
                  <span> Sec </span>
                </p>
              </div>

              <p className='bg-primary px-4 py-2 hover:bg-primary/80 text-white rounded-md w-fit md:w-full text-center mx-auto md:mx-0'> Buy Ticket {event.price} </p>
            </div>
          </div>

          
          <hr className='my-4 hidden md:flex border-0 w-full h-0.5 bg-primary/40'/>


          <div className='flex flex-row gap-4 items-center md:items-start justify-between p-4 md:p-0 bg-white'>
            <div className='flex gap-2 items-center'>
              <img src={event.image} alt={event.title} className='w-10 h-10 object-cover object-center rounded-full' />
              <div className='flex flex-col gap-0'>
                <p className='text-sm cursor-pointer'> Event Organizers </p>
                <small className='text-xs text-gray-500 cursor-pointer'> @username </small>
              </div>
            </div>

            <div className='flex gap-2 items-center'>
              <p className='flex items-center justify-center md:justify-start gap-1 mt-2 text-xs text-primary cursor-pointer'>
                Share: 
                <HiMiniShare />
              </p> 
            </div>
          </div>
        </div>
      </div>


      {/* DESCRIPTION */}
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl font-bold'> Description </h3>
        {/* <p className='text-sm text-gray-600'> {event.description} </p> */}
      </div>

      {/* GALLERY */}
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl font-bold'> Gallery </h3>
        <div className='flex flex-wrap gap-4'>
          {/* {event.gallery.map((image, index) => (
            <img src={image} alt={event.title} key={index} className='w-24 h-24 object-cover object-center rounded-md' />
          ))} */}
        </div>
      </div>

      {/* REVIEWS */}
      <div className='flex flex-col gap-4'>
        <h3 className='text-xl font-bold'> Reviews </h3>
        <div className='flex flex-col gap-4'>
          {/* {event.reviews.map((review, index) => (
            <div key={index} className='flex flex-col gap-2 p-4 bg-white
              rounded-md shadow-md'>
              <div className='flex gap-4 items-center'>
                <img src={review.image} alt={review.name} className='w-10 h-10 object-cover object-center rounded-full' />
                <div>
                  <p className='text-sm font-semibold'> {review.name} </p>
                  <p className='text-xs text-gray-500'> {review.date} </p>
                </div>
              </div>
              <p className='text-sm text-gray-600'> {review.comment} </p>

              <div className='flex gap-2'>
                <button className='bg-primary text-white py-1 px-4 rounded-md text-xs'> Like </button>
                <button className='bg-primary text-white py-1 px-4 rounded-md text-xs'> Reply </button>
              </div>
              <hr className='border-0 w-full h-0.5 bg-primary/20'/>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default EventPage;