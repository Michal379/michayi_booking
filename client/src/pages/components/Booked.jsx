import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../App.css';
import Rating from './Rating';

const Booked = ({ userDetails }) => { // Add userDetails as a prop
  const { id } = useParams();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedHotel(data));
  }, [id]);

  useEffect(() => {
    if (selectedHotel) {
      fetch(`/hotels/${id}/rooms`)
        .then((response) => response.json())
        .then((data) => {
          const roomsArray = Array.isArray(data) ? data : [data];
          setRooms(roomsArray);
        });
    }
  }, [selectedHotel, id]);

  useEffect(() => {
    const storedSelectedRoom = localStorage.getItem('selectedRoom');
    if (storedSelectedRoom && rooms.find((room) => room.id === storedSelectedRoom)) {
      setSelectedRoom(storedSelectedRoom);
    }
  }, [rooms]);

  const handleRoomSelection = (roomId) => {
    const selectedRoom = rooms.find((room) => room.id === roomId);
    if (selectedRoom) {
      setSelectedRoom(selectedRoom);
      localStorage.setItem('selectedRoom', roomId);
  
      // Navigate to booking details page
      navigate(`/booking-details`, {
        state: {
          userDetails: userDetails,
          roomType: selectedRoom.type,
          roomPrice: selectedRoom.price,
          hotel: selectedHotel,
          hotelName: selectedHotel.name, // Add hotelName property to the state object
        },
      });
    }
  };
  

  const handleRemove = () => {
    setSelectedHotel(null);
    setSelectedRoom(null);
    localStorage.removeItem('selectedRoom');
    navigate('/hotels');
  };

  return (
    <div className="booked-container">
      <h1>Booked Successfully!</h1>
      {selectedHotel && (
        <div className="hotel-details">
          <img src={selectedHotel.image} alt={selectedHotel.name} />
          <h3>{selectedHotel.name}</h3>
          <h5>{selectedHotel.address}</h5>
          <p>{selectedHotel.description}</p>
          <p>Amenities: {selectedHotel.amenities}</p>
          <p>Rating: {selectedHotel.rating}</p>
        </div>
      )}
      {rooms.length > 0 && (
        <div className="rooms-container">
          <h3>Available Rooms:</h3>
          <div className="rooms-grid">
            {rooms.map((room) => (
              <div key={room.id} className="room-item">
                <input
                  type="checkbox"
                  checked={selectedRoom === room.id}
                  onChange={() => handleRoomSelection(room.id)}
                />
                <span className={selectedRoom === room.id ? 'selectedRoom' : 'room'}>
                  {room.type}
                </span>
                <p>Capacity: {room.capacity}</p>
                <p>Price: {room.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Booked;
