import React from 'react';

const BookingDetails = ({ userDetails, hotelName, roomType }) => {
  return (
    <div>
      <h1>Booking Details</h1>
      <h2>Hotel: {hotelName}</h2>
      <h3>User Details:</h3>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
      <h3>Room Type: {roomType}</h3>
    </div>
  );
};

export default BookingDetails;
