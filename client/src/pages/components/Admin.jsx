import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';


const Admin = () => {
  const [hotels, setHotels] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [hotelData, setHotelData] = useState({
    name: '',
    address: '',
    description: '',
    amenities: '',
    rating: '',
    image: '',
  });
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
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
      body: JSON.stringify({ hotel: hotelData }),
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
        setSuccessMessage('Hotel added successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const resetForm = () => {
    setHotelData({
      name: '',
      address: '',
      description: '',
      amenities: '',
      rating: '',
      image: '',
    });
  };

  const handleDeleteHotel = (hotelId) => {
    fetch(`/admin/hotels/${hotelId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setHotels((prevHotels) => prevHotels.filter((hotel) => hotel.id !== hotelId));
          setSuccessMessage('Hotel deleted successfully!');
        } else {
          throw new Error('Failed to delete hotel');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleEditHotel = (hotelId) => {
    const hotel = hotels.find((hotel) => hotel.id === hotelId);
    setSelectedHotel(hotel);
    setHotelData(hotel);
    setShowAddForm(false); // Hide the add form
  };

  const handleUpdateHotel = (e) => {
    e.preventDefault();
    fetch(`/admin/hotels/${selectedHotel.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hotel: hotelData }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to update hotel');
        }
      })
      .then((data) => {
        setHotels((prevHotels) =>
          prevHotels.map((hotel) => (hotel.id === selectedHotel.id ? data : hotel))
        );
        resetForm();
        setSelectedHotel(null);
        setSuccessMessage('Hotel updated successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="admin-container">
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <button className="admin-option" onClick={() => setShowAddForm(!showAddForm)}>
          <FontAwesomeIcon icon={faPlus} /> Add Hotel
        </button>
        {showAddForm && (
          <div className="add-hotel-form">
            <h2>Add Hotel</h2>
            <form onSubmit={handleAddHotel}>
              {/* Input fields for adding a new hotel */}
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={hotelData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={hotelData.address}
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

              <label htmlFor="amenities">Amenities</label>
              <input
                type="text"
                id="amenities"
                name="amenities"
                value={hotelData.amenities}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={hotelData.rating}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={hotelData.image}
                onChange={handleInputChange}
                required
              />

              <button type="submit">Add Hotel</button>
            </form>
          </div>
        )}
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
              {selectedHotel && selectedHotel.id === hotel.id && !showAddForm && (
                <div className="edit-hotel-form">
                  <h2>Edit Hotel</h2>
                  <form onSubmit={handleUpdateHotel}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={hotelData.name}
                      onChange={handleInputChange}
                      required
                    />

                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={hotelData.address}
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

                    <label htmlFor="amenities">Amenities</label>
                    <input
                      type="text"
                      id="amenities"
                      name="amenities"
                      value={hotelData.amenities}
                      onChange={handleInputChange}
                      required
                    />

                    <label htmlFor="rating">Rating</label>
                    <input
                      type="text"
                      id="rating"
                      name="rating"
                      value={hotelData.rating}
                      onChange={handleInputChange}
                      required
                    />

                    <label htmlFor="image">Image URL</label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      value={hotelData.image}
                      onChange={handleInputChange}
                      required
                    />

                    <button type="submit">Update Hotel</button>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
