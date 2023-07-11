import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/components/Home';
import List from './pages/List';
import Hotel from './pages/components/Hotel';
import AboutUs from './pages/components/AboutUs';
import Signup from './pages/components/Signup';
import Login from './pages/components/Login';
import Logout from './pages/components/Logout';
import Booked from './pages/components/Booked';
import BookingDetailsPage from './pages/components/BookingDetailsPage';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';
import Admin from './pages/components/Admin';

function App() {
  const [user, setUser] = useState(null); // Define the setUser function
  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [searchedHotels, setSearchedHotels] = useState([]);

  const handleSignup = (user) => {
    setUserDetails(user);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} >
          <Route index element={<Hotel setSearchedHotels={setSearchedHotels} />} />
        </Route>
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login setUser={handleLogin} setMessage={setMessage} />} /> {/* Pass setUser as setUser={handleLogin} */}
        <Route path="/logout" element={<Logout onLogout={handleLogout} setMessage={setMessage} />} />
        <Route path="/booked/:id" element={<Booked userDetails={userDetails} />} />
        <Route path="/booking-details" element={<BookingDetailsPage userDetails={userDetails} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
      {message && <div className="message">{message}</div>}
    </BrowserRouter>
  );
}

export default App;
