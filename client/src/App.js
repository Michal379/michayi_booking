import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import List from "./pages/List";
import Hotel from "./pages/components/Hotel";
import AboutUs from "./pages/components/AboutUs";
import Signin from "./pages/components/Signin";
import Login from "./pages/components/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="/signin" element={<Signin/>} /> 
      <Route path="/login" element={<Login setUser={setUser}/>} />
      <Route path="/aboutus" element={<AboutUs/>} />      
    </Routes>    
    </BrowserRouter>
  );
}

export default App;
