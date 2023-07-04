import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/components/Home";
import List from "./pages/List";
import Hotel from "./pages/components/Hotel";
import AboutUs from "./pages/components/AboutUs";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="/aboutus" element={<AboutUs/>} />      
    </Routes>    
    </BrowserRouter>
  );
}

export default App;
