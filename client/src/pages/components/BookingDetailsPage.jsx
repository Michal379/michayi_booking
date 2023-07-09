import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../App.css';

const BookingDetailsPage = ({ userDetails }) => {
  const location = useLocation();
  const { hotelName, roomType, roomPrice, hotel } = location.state;
  const [paymentMethod, setPaymentMethod] = useState('');

  if (!hotel) {
    return <div>Loading...</div>;
  }

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBookingConfirmation = () => {
    if (paymentMethod) {
      const fullName = userDetails ? userDetails.name : 'Guest';
      Swal.fire({
        title: `Congratulations, ${fullName}!`,
        text: 'Your booking was successful.',
        icon: 'success',
      });
    }
  };

  return (
    <div className="booking-details-container">
      <h1>Booking Details</h1>
      <h2>Hotel: {hotel?.name}</h2>
      <h3>User Details:</h3>
      <p>Name: {userDetails?.name}</p>
      <p>Email: {userDetails?.email}</p>
      <p>Phone: {userDetails?.phone_number}</p>
      <h3>Room Details:</h3>
      <p>Type: {roomType}</p>
      <p>Price: {roomPrice}</p>
      <h3>Payment Method:</h3>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={handlePaymentMethodChange}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            value="visa"
            checked={paymentMethod === 'visa'}
            onChange={handlePaymentMethodChange}
          />
          Visa
        </label>
        <label>
          <input
            type="radio"
            value="credit_card"
            checked={paymentMethod === 'credit_card'}
            onChange={handlePaymentMethodChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={handlePaymentMethodChange}
          />
          Mpesa
        </label>
      </div>
      {paymentMethod && <p>Selected payment method: {paymentMethod}</p>}
      <button onClick={handleBookingConfirmation}>Confirm Booking</button>
    </div>
  );
};

export default BookingDetailsPage;
