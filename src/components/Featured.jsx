import React from "react";
import { events } from '../assets/data';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./custom.css";



const Featured = () => {
  const featuredEvents = events.filter(event => event.featured === true);

  return (
    <div className="container mx-auto px-4 md:px-0 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
        Featured Events
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}       
        breakpoints={{
          1024:{
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3
          }
        }}
      >
        {featuredEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <Link
              to={`/events/${event.id}`}
              className="bg-white !shadow-lg rounded-lg overflow-hidden text-sm"
              title={event.title}>
              <img
                src={event.image}
                alt=""
                className="w-full h-auto object-cover" />
              <div className="px-4 py-2 md:py-3 bg-white">
                <h3 className="text-md md:text-lg font-semibold truncate">
                  {event.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
