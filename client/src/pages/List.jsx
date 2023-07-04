import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hotel from './components/Hotel'
import Header from './components/Header'
import Footer from './components/Footer'

const List = () => {
  // const [hotels, setHotels] = useState([])

  // useEffect(() => {
  //   fetch("/hotels")
  //   .then((r) =>r.json())
  //   .then((hotels) =>{
  //     setHotels(hotels)
  //   })
  // }, [])
  // console.log(hotels);

    return (
    <div>
      <Navbar /> 
      <Header type="list"/>
      <Hotel />
      <Footer />
    </div>
  )
}

export default List