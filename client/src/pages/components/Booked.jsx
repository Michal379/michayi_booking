import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../App.css';


const Booked = () => {
  const { id } = useParams();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
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
        .then((data) => setRooms(data));
    }
  }, [selectedHotel, id]);

  const handleRemove = () => {
    setSelectedHotel(null);
    navigate('/hotels');
  };

  return (
    <div>
      <h1>Booked Successfully!</h1>
      {selectedHotel && (
        <div>
          <img src={selectedHotel.image} alt={selectedHotel.name} />
          <h3>{selectedHotel.name}</h3>
          <h5>{selectedHotel.address}</h5>
          <h5>{selectedHotel.description}</h5>
          <h5>Amenities: {selectedHotel.amenities}</h5>
          <h5>Rating: {selectedHotel.rating}</h5>
        </div>
      )}
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
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Booked;
