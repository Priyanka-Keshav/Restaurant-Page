import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Indian from "./Components/Indian";
import Drinks from "./Components/Drinks";
import { cuisine } from "./Components/Context";

export default function App() {
  const [selectedCuisine, setCuisine] = useState("");

  return (
    <BrowserRouter>
      <Navbar />
      <cuisine.Provider value={{ selectedCuisine, setCuisine }}>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Menu/indian" element={<Indian />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </cuisine.Provider>
    </BrowserRouter>
  );
}
