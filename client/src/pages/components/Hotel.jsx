import React, { useState, useEffect } from 'react'

const Hotel = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    fetch("/hotels")
    .then((r) =>r.json())
    .then((hotels) =>{
      setHotels(hotels)
    })
  }, [])
  console.log(hotels);
  
  return (
    <div>Hotel</div>
  )
}

export default Hotel