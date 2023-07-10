import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>michayibooking.com</h1>
      <p>
        Welcome to MichayiBooking, your go-to platform for finding the perfect accommodations for your travel needs.
        We are passionate about connecting travelers with the best hotels around the world.
      </p>
      <p>
        <b>Our Mission:</b> To provide an exceptional booking experience and make your travel dreams come true.
      </p>
      <p>
        At MichayiBooking, we believe that finding the ideal hotel should be easy and stress-free.
        With our extensive database of hotels and user-friendly interface, you can browse and book your desired accommodations
        with confidence and convenience.
      </p>
      <p>
        <b>Our Features:</b>
      </p>
      <ul>
        <li>
          <span className="highlight">Wide Selection:</span> Choose from a vast range of hotels across various destinations.
        </li>
        <li>
          <span className="highlight">User Reviews:</span> Read honest reviews from fellow travelers to make informed decisions.
        </li>
        <li>
          <span className="highlight">Advanced Filters:</span> Refine your search based on location, amenities, ratings, and more.
        </li>
        <li>
          <span className="highlight">Secure Booking:</span> Rest assured that your personal and payment information is protected.
        </li>
      </ul>
      <p>
        Whether you're planning a relaxing beach vacation, a business trip, or a family getaway, MichayiBooking has you covered.
        Start your journey with us today and experience the joy of seamless hotel bookings.
      </p>
      <p style={{ textAlign: 'center', fontSize: '18px' }}>
        <b>
          Thank you for choosing MichayiBooking! We look forward to being a part of your travel adventures!
        </b>
      </p>
    </div>
  );
};

export default AboutUs;
