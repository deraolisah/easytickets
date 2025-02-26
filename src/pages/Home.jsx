import React from 'react';
import { Link } from 'react-router-dom';
import paystack from "../assets/paystack.png";
import backgroundImageLg from '../assets/hero-img.jpg';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import NewlyAdded from '../components/NewlyAdded';
import Offers from '../components/Offers';
import Numbers from '../components/Numbers';

const Home = () => {
  

  return (
    <div>
      <div className="h-80 md:h-[388px] flex items-center justify-center text-white"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundImage: `linear-gradient(45deg, rgba(63, 81, 181, 0.6), rgba(156, 39, 176, 0.8), rgba(233, 30, 99, 0.8)), url(${backgroundImageLg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4"> Easily Access Your Next Event </h1>
          {/* <h1 className="text-2xl md:text-4xl font-bold mb-4"> Easy Access to Tickets for Every Event </h1> */}
          <p className="md:text-md mb-4 md:mb-6 max-w-[400px] mx-auto"> A platform to discover, share, sell and book tickets for the best events near you. </p>

          <div className='flex flex-wrap items-center justify-center gap-2'>
            <Link
              to="/events"
              className="bg-white text-sm md:text-lg text-primary px-6 py-3 rounded-lg border-1 border-white font-semibold hover:bg-blue-50 transition duration-300"
              >
              Explore Events
            </Link>
            <Link to="/create-event" className='border-1 border-white text-sm md:text-lg px-6 py-3 rounded-lg'>
              Create Event
            </Link>
          </div>

          <small className='w-full text-center text-xs flex items-center justify-center gap-1 mt-8 md:mt-10'> 
            Integrated with PayStack 
            <img src={paystack} alt='' className='w-4.5 bg-white p-1 rounded-sm -mt-1 ml-0.5' />
          </small>
        </div>
      </div>


      <Categories />
      
      <Featured />

      <NewlyAdded />
      
      <Offers />




      {/* Testimonials Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 md:px-0 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "EventEase made it so easy to find and book tickets for my favorite events. Highly recommended!"
              </p>
              <p className="text-gray-600 font-semibold">- Jane Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "The platform is user-friendly, and the ticket purchasing process is seamless."
              </p>
              <p className="text-gray-600 font-semibold">- John Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "I love the variety of events available. There's always something exciting to attend!"
              </p>
              <p className="text-gray-600 font-semibold">- Sarah Johnson</p>
            </div>
          </div>
        </div>
      </div>


      <Numbers />
      

      {/* Call-to-Action Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Join the Fun?</h2>
          <p className="text-lg mb-8">Sign up now and start exploring amazing events near you.</p>
          <Link
            to="/register"
            className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>      
    </div>
  );
};

export default Home;