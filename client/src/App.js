import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import List from "./pages/List";
import Hotel from "./pages/components/Hotel";
import AboutUs from "./pages/components/AboutUs";
import Signup from "./pages/components/Signup";
import Login from "./pages/components/Login";
import Booked from "./pages/components/Booked";
import { useState } from "react";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/booked/:id" element={<Booked />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
