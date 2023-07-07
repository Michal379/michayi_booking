import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../App.css';

const Booked = () => {
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
    if (selectedRoom === roomId) {
      setSelectedRoom(null);
      localStorage.removeItem('selectedRoom');
    } else {
      setSelectedRoom(roomId);
      localStorage.setItem('selectedRoom', roomId);
    }
  };

  const handleRemove = () => {
    setSelectedHotel(null);
    setSelectedRoom(null);
    localStorage.removeItem('selectedRoom');
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
              <input
                type="checkbox"
                checked={selectedRoom === room.id}
                onChange={() => handleRoomSelection(room.id)}
              />
              <span className={selectedRoom === room.id ? 'selectedRoom' : 'room'}>
                {room.type}
              </span>
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
