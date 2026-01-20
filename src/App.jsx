import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [openDropDown, setOpenDropDown] = useState(false);

  const [location, setLocation] = useState();
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      // console.log(latitude,longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        // console.log(location)
        const exactLocation = location.data.address;
        console.log(exactLocation);
        setLocation(exactLocation);
        setOpenDropDown(false);
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
        getLocation={getLocation}
        s
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/category/:categoryid" element={<CategoryPage />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/cart"
          element={<ProtectedRoute><Cart location={location} getLocation={getLocation} /> </ProtectedRoute>}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
