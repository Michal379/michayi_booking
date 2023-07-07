import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingDetails from './BookingDetails';

const BookingDetailsPage = () => {
  const location = useLocation();
  const { userDetails, hotelName, roomType } = location.state;

  return (
    <div>
      <BookingDetails userDetails={userDetails} hotelName={hotelName} roomType={roomType} />
    </div>
  );
};

export default BookingDetailsPage;
