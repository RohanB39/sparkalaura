import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/ContactUs";
import Footer from "./components/Footer";
import GardenMaintenance from "./pages/GardanMaintanance";
import Gifting from "./pages/Gifting";
import CorporatePlantRental from "./pages/CorporatePlantRental";
import GreenWalls from "./pages/GreenWalls";
import PottedGardenDevelopment from "./pages/PottedGardenDevelopment";
import ScrollToTop from "./components/ScrollToTop";
import ViewAllCollectionMain from "./components/ViewallCollections/ViewAllCollectionMain";
import ProductDetail from "./components/ProductInfo/ProductDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import PrivacyPolicy from "./pages/PolicyPages/PrivacyPolicy";
import RefundPolicy from "./pages/PolicyPages/RefundPolicy";
import Cart from "./pages/Cart/Cart";
import "@fontsource/work-sans";
import WoodenCandle from "./pages/WoodenCandle";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gardenMaintainance" element={<GardenMaintenance />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/rentalPlant" element={<CorporatePlantRental />} />
        <Route path="/greenWall" element={<GreenWalls />} />
        <Route path="/pottedGarden" element={<PottedGardenDevelopment />} />
        <Route path="/viewAllCollection" element={<ViewAllCollectionMain />} />
        <Route path="/product/:id" element={<ProductDetail />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/privacyp" element={<PrivacyPolicy />} /> 
        <Route path="/refundp" element={<RefundPolicy />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/woodenCandle" element={<WoodenCandle />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
