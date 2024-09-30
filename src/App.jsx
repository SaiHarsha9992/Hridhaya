import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mmain from "./components/Mmain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/profile";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import ServicesPage from "./pages/Services";
import BuyNfcCard from "./pages/BuyNFCCard";
import BasicDetailsForm from "./pages/BasicDetailsForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/buy" element={<BuyNfcCard />} />
          <Route path="/newuser" element={<BasicDetailsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
