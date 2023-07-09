import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingDetailsPage = ({ userDetails }) => {
  const location = useLocation();
  const { hotelName, roomType, roomPrice, hotel } = location.state;

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Booking Details</h1>
      <h2>Hotel: {hotel?.name}</h2>
      <h3>User Details:</h3>
      <p>Name: {userDetails?.name }</p>
      <p>Email: {userDetails?.email }</p>
      <p>Phone: {userDetails?.phone_number }</p>
      <h3>Room Details:</h3>
      <p>Type: {roomType}</p>
      <p>Price: {roomPrice}</p>
    </div>
  );
};


export default BookingDetailsPage;
