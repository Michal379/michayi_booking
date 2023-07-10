import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/admin/hotels')
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDeleteHotel = (hotelId) => {
    fetch(`/admin/hotels/${hotelId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setHotels((prevHotels) => prevHotels.filter((hotel) => hotel.id !== hotelId));
        } else {
          throw new Error('Failed to delete hotel');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Display an error message to the user
      });
  };

  const handleEditHotel = (hotelId) => {
    navigate(`/admin/edit-hotel/${hotelId}`);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <Link to="/admin/create-hotel" className="admin-option">
        <FontAwesomeIcon icon={faPlus} /> Add Hotel
      </Link>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-item">
            <h3>{hotel.name}</h3>
            <p>{hotel.address}</p>
            <button onClick={() => handleEditHotel(hotel.id)} className="admin-option">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
            <button onClick={() => handleDeleteHotel(hotel.id)} className="admin-option">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
