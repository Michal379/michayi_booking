import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const [hotels, setHotels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [hotelData, setHotelData] = useState({
    name: '',
    location: '',
    description: '',
    amenities: '',
    rating: '',
    imageUrl: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/admin/hotels')
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotelData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddHotel = (e) => {
    e.preventDefault();
    fetch('/admin/hotels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hotelData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to add hotel');
        }
      })
      .then((data) => {
        setHotels((prevHotels) => [...prevHotels, data]);
        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const resetForm = () => {
    setHotelData({
      name: '',
      location: '',
      description: '',
      amenities: '',
      rating: '',
      imageUrl: '',
    });
  };

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
      });
  };

  const handleEditHotel = (hotelId) => {
    navigate(`/admin/edit-hotel/${hotelId}`);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button className="admin-option" onClick={() => setShowForm(true)}>
        <FontAwesomeIcon icon={faPlus} /> Add Hotel
      </button>
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
      {showForm && (
        <div className="add-hotel-form">
          <h2>Add Hotel</h2>
          <form onSubmit={handleAddHotel}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={hotelData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={hotelData.location}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={hotelData.description}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit">Add Hotel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
