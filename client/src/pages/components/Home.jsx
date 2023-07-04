import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Header from './Header';
import Hotel from './Hotel';
// import List from '../List';
import Footer from './Footer';

const Home = () => {
  return (
    
    <>
    <Navbar />
    <Header />
    <Hotel />
    {/* <List /> */}
    <div className="homeContainer"></div>
    <Footer />
    </>
  )
}

export default Home