import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Usage from "./components/Usage";
import Github from "./components/Github";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Usage" element={<Usage />} />
          <Route path="/Github" element={<Github />} />
        </Routes>
        <ScrollToTopButton />
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
