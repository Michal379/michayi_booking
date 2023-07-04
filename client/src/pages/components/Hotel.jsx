import React, { useState, useEffect } from 'react'

const Hotel = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    fetch("/hotels")
    .then((r) =>r.json())
    .then((hotels) => setHotels(hotels))
  }, [])

  console.log(hotels);


  return (
    <div className='hotel'>
      {hotels.map((hotel) => (
        <div key={hotel.id} className='hotelCard'>
          <div className="imageContainer">
          <img src={hotel.image} alt={hotel.name} className='hotelImage                              '/>
          </div>
          <h3>{hotel.name}</h3>
          <h5>{hotel.address}</h5>
          <h5>{hotel.description}</h5>
          <h5>Amenities: {hotel.amenities}</h5>
          <h5>Rating: {hotel.rating}</h5>
        </div>
      ))}
    </div>
  );
};

export default Hotel