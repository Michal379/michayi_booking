import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/fontawesome-svg-core';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [rooms, setRooms] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data));
  }, []);

  useEffect(() => {
    if (selectedHotelId) {
      fetch(`/hotels/${selectedHotelId}/rooms`)
        .then((response) => response.json())
        .then((data) => setRooms(data));
    }
  }, [selectedHotelId]);

  const handleBooking = async (hotelId) => {
    setSelectedHotelId(hotelId);
    const response = await fetch(`/hotels/${hotelId}/rooms`);
    const data = await response.json();
    const roomsArray = Array.isArray(data) ? data : [data]; // Convert single object to array if needed
    setRooms(roomsArray);
    navigate(`/booked/${hotelId}?rooms=${encodeURIComponent(JSON.stringify(roomsArray))}`);
  };

  return (
    <div className="hotel">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotelCard">
          <div className="imageContainer">
            <img src={hotel.image} alt={hotel.name} className="hotelImage" />
            <button className="bookNow" onClick={() => handleBooking(hotel.id)}>
              Reserve or Book
            </button>
          </div>
          <h3>{hotel.name}</h3>
          <h5>{hotel.address}</h5>
          <h5>{hotel.description}</h5>
          <h5>Amenities: {hotel.amenities}</h5>
          <h5>Rating: {hotel.rating}</h5>
        </div>
      ))}
      {/* Render the available rooms for the selected hotel  */}
      {rooms.length > 0 && (
        <div>
          <h3>Available Rooms:</h3>
          {rooms.map((room) => (
            <div key={room.id}>
              <h5>{room.type}</h5>
              <h5>Capacity: {room.capacity}</h5>
              <h5>Price: {room.price}</h5>
            </div>
          ))}
        </div>
      )}
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
          <span>At the heart of Milenic city. With an unwavering rating of 5!</span>
          <h2>
            <b>$1050</b> (10 nights)
          </h2>
          <button onClick={() => handleBooking(selectedHotelId)}>Reserve or Book!</button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
