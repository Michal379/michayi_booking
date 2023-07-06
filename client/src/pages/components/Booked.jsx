
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Booked = () => {
  const { id } = useParams();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedHotel(data));
  }, [id]);

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
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default Booked;
