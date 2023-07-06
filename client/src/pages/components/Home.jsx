import React, { Component } from 'react'
import Header from './Header';
import Featured from './Featured';

const Home = () => {
  return (    
    <>
    <Header />
    <div className="homeContainer">
      <Featured />
    </div>
    </>
  )
}

export default Home