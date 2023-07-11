import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Search from './Search';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [showSignIn, setShowSignIn] = useState(false);
  const [user, setUser] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();
  const destinationRef = useRef(null);

  useEffect(() => {
    fetch('/hotels')
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        setFilteredHotels(data); // Initialize filtered hotels with all hotels
      });
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
    const roomsArray = Array.isArray(data) ? data : [data];
    setRooms(roomsArray);
    navigate(`/booked/${hotelId}?rooms=${encodeURIComponent(JSON.stringify(roomsArray))}`);
  };

  const handleSignIn = () => {
    setShowSignIn(true);
  };

  const handleSignInSubmit = (user) => {
    setUser(user);
    setShowSignIn(false);
  };

  const handleRoomSelection = (roomId) => {
    const selectedRoom = rooms.find((room) => room.id === roomId);
    if (selectedRoom) {
      setSelectedRoom(selectedRoom);
      setSelectedRooms([roomId]);
      navigate(`/booking-details`, {
        state: {
          userDetails: user,
          hotelName: hotels.find((hotel) => hotel.id === selectedHotelId).name,
          roomType: selectedRoom.type,
          roomPrice: selectedRoom.price,
          hotel: hotels.find((hotel) => hotel.id === selectedHotelId),
        },
      });
    }
  };

  const isRoomSelected = (roomId) => {
    return selectedRooms.includes(roomId);
  };

  const handleSearch = (searchParams) => {
    const { name, location } = searchParams;
  
    const filteredHotels = hotels.filter((hotel) => {
      const isNameMatched = hotel.name.toLowerCase().includes(name.toLowerCase());
      const isLocationMatched = hotel.address.toLowerCase().includes(location.toLowerCase());
      return isNameMatched && isLocationMatched;
    });
  
    setFilteredHotels(filteredHotels);
  };
  
  return (
    
    <div className="hotel">
            <Search onSearch={handleSearch} />

      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => (
          <div key={hotel.id} className="hotelCard">
            <div className="imageContainer">
              <img src={hotel.image} alt={hotel.name} className="hotelImage" />
              {showSignIn ? (
                <Login onSignInSubmit={handleSignInSubmit} />
              ) : (
                <button className="bookNow" onClick={() => handleBooking(hotel.id)}>
                  View rooms
                </button>
              )}
            </div>
            <h3>{hotel.name}</h3>
            <h5>{hotel.address}</h5>
            <h5>{hotel.description}</h5>
            <h5>Amenities: {hotel.amenities}</h5>
            <h5>Rating: {hotel.rating}</h5>
          </div>
        ))
      ) : (
        <p>No hotels found.</p>
      )}

      {rooms.length > 0 && (
        <div>
          <h3>Available Rooms:</h3>
          {rooms.map((room) => (
            <div key={room.id}>
              <button
                className={isRoomSelected(room.id) ? 'selectedRoom' : 'room'}
                onClick={() => handleRoomSelection(room.id)}
              >
                {room.type}
              </button>
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
      </div>
    </div>
  );
};

export default Hotel;
