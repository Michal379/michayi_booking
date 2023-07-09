import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../App.css';

const BookingDetailsPage = ({ userDetails }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotelName, roomType, roomPrice, hotel } = location.state;
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!hotel) {
    return <div>Loading...</div>;
  }

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setErrorMessage('');
  };

  const handleBookingConfirmation = () => {
    if (paymentMethod) {
      const fullName = userDetails ? userDetails.name : 'Guest';
      Swal.fire({
        title: `Congratulations, ${fullName}!`,
        text: 'Your booking was successful.',
        icon: 'success',
      });
    } else {
      setErrorMessage('Please choose a mode of payment.');
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear session/local storage, update user authentication state, etc.
    // Then navigate the user to the home page
    navigate('/');
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
      <h3>Mode of Payment:</h3>
      <div className="payment-options" style={{ marginTop: '10px', marginBottom: '10px' }}>
        <label style={{ marginBottom: '5px' }}>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={handlePaymentMethodChange}
          />
          PayPal
        </label>
        <label style={{ marginBottom: '5px' }}>
          <input
            type="radio"
            value="visa"
            checked={paymentMethod === 'visa'}
            onChange={handlePaymentMethodChange}
          />
          Visa
        </label>
        <label style={{ marginBottom: '5px' }}>
          <input
            type="radio"
            value="credit_card"
            checked={paymentMethod === 'credit_card'}
            onChange={handlePaymentMethodChange}
          />
          Credit Card
        </label>
        <label style={{ marginBottom: '5px' }}>
          <input
            type="radio"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={handlePaymentMethodChange}
          />
          Mpesa
        </label>
      </div>
      {paymentMethod && <p style={{ marginBottom: '10px' }}>Selected payment method: {paymentMethod}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button
        onClick={handleBookingConfirmation}
        style={{
          display: 'block',
          margin: '20px auto 0',
        }}
      >
        Confirm Booking
      </button>
      <button
        onClick={handleGoBack}
        style={{
          display: 'block',
          margin: '10px auto 0',
        }}
      >
        Go Back
      </button>
      <button
        onClick={handleLogout}
        style={{
          display: 'block',
          margin: '10px auto 0',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default BookingDetailsPage;
