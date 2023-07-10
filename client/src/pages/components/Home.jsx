import React, { Component } from 'react'
import Header from './Header';
import Featured from './Featured';
import AboutUs from './AboutUs';

const Home = () => {
  return (    
    <>
    <Header />
    <div className="homeContainer">
      <Featured />
      <AboutUs />
    </div>
    </>
  )
}

export default Home