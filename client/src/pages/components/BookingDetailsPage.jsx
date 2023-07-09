import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';

const BookingDetailsPage = ({ userDetails }) => {
  const location = useLocation();
  const { hotelName, roomType, roomPrice, hotel } = location.state;

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="booking-details-container" style={{ backgroundImage: `url('https://cf.bstatic.com/xdata/images/hotel/max1024x768/342980112.jpg?k=e6be6ff1b99a74127bc30a32ae5dcb4043d8d88d04b34f73e4af66b0edf2615f&o=&hp=1')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <h1>Booking Details</h1>
      <h2>Hotel: {hotel?.name}</h2>
      <h3>User Details:</h3>
      <p>Name: {userDetails?.name}</p>
      <p>Email: {userDetails?.email}</p>
      <p>Phone: {userDetails?.phone_number}</p>
      <h3>Room Details:</h3>
      <p>Type: {roomType}</p>
      <p>Price: {roomPrice}</p>
    </div>
  );
};

export default BookingDetailsPage;
