import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hotel from './components/Hotel'
import Header from './components/Header'


const List = () => {
  
    return (
    <div>
      <Header type="list"/>
      <Hotel />
    </div>
  )
}

export default List