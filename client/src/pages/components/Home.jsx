import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Header from './Header';
// import Hotel from './Hotel';
// import List from '../List';
import Footer from './Footer';
import Featured from './Featured';

const Home = () => {
  return (
    
    <>
    <Navbar />
    <Header />
    {/* <List /> */}
    <div className="homeContainer">
      <Featured />
      {/* <Hotel /> */}
    </div>
    <Footer />
    </>
  )
}

export default Home