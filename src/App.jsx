import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Construction from "./Component/Construction/Construction";
import AboutSection from "./Component/AboutSection/AboutSection";
import ProductSection from "./Component/ProductSection/ProductSection";
import TeamSection from "./Component/TeamSection/TeamSection";

// Dummy pages for routes



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Construction/>
     <AboutSection/>
     <ProductSection/>
       <TeamSection/>
    </BrowserRouter>
  
  );
}

export default App;

