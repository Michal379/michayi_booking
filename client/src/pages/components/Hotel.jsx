import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/fontawesome-svg-core';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("/hotels")
      .then((r) => r.json())
      .then((hotels) => setHotels(hotels));
  }, []);

  console.log(hotels);

  return (
    <div className="hotel">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotelCard">
          <div className="imageContainer">
            <img src={hotel.image} alt={hotel.name} className="hotelImage" />
            <Link to="/booked">
            <button className="bookNow">Reserve or Book</button>
            </Link>
          </div>
          <h3>{hotel.name}</h3>
          <h5>{hotel.address}</h5>
          <h5>{hotel.description}</h5>
          <h5>Amenities: {hotel.amenities}</h5>
          <h5>Rating: {hotel.rating}</h5>
        </div>
      ))}
      <div className="hotelDetails">
        <div className="hotelDetailsTexts">
          <h1 className="hotelTitle">Stay in Milenic!</h1>
          <p className="hotelDesc">
            Discover the perfect oasis at our luxurious hotel located in the heart of a vibrant Milenic city.
            Nestled amidst breathtaking landscapes, our hotel offers an idyllic escape where tranquility meets convenience.
            Indulge in top-notch amenities, including a sparkling swimming pool and complimentary high-speed WiFi throughout the premises.
            Immerse yourself in our exceptional service, ensuring a memorable stay from start to finish.
            Experience a harmonious blend of comfort and elegance, where every detail is meticulously crafted to exceed your expectations.
            Unwind, relax, and create unforgettable memories at our remarkable hotel.
          </p>
        </div>
        <div className="hotelDetailsPrice">
          <h1>perfect for a 10-day stay</h1>
          <span>At the heart of Milenic city. With unwavering rating of 5!</span>
          <h2>
            <b>$1050</b> (10 nights)
          </h2>
            <button>Reserve or Book!</button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
