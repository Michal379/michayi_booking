import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingDetailsPage = ({ userDetails }) => {
  const location = useLocation();
  const { hotelName, roomType, roomPrice, hotel } = location.state;

  // Check if the hotel object is available
  if (!hotel) {
    return <div>Loading...</div>; // or any other appropriate loading state
  }

  return (
    <div>
      <h1>Booking Details</h1>
      <h2>Hotel: {hotel?.name}</h2> {/* Use optional chaining operator to handle null objects */}
      <h3>User Details:</h3>
      <p>Name: {userDetails?.name || 'Unknown'}</p> {/* Display 'Unknown' if name is not available */}
      <p>Email: {userDetails?.email}</p> {/* Use optional chaining operator to handle null objects */}
      <p>Phone: {userDetails?.phone}</p> {/* Use optional chaining operator to handle null objects */}
      <h3>Room Details:</h3>
      <p>Type: {roomType}</p>
      <p>Price: {roomPrice}</p>
    </div>
  );
};

export default BookingDetailsPage;
