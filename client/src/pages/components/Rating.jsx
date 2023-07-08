import React from 'react';
import '../../App.css';

const Rating = ({ value }) => {
  const filledStars = Math.round(value);
  const emptyStars = 5 - filledStars;

  return (
    <div className="rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star filled">&#9733;</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star empty">&#9734;</span>
      ))}
    </div>
  );
};

export default Rating;
