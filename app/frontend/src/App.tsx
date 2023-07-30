import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ShopPage from "./views/ShopPage";
import BlogPage from "./views/BlogPage";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import AboutPage from "./views/AboutPage";
import ReportUFOPage from "./views/ReportUFOPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/report-ufo" element={<ReportUFOPage />} />
      </Routes>
      {/* 
      <AdSenseAd
        adClient="ca-pub-XXXXXXXXXXXXXXXX"
        adSlot="1234567890"
        adFormat="auto"
        adStyle={{ display: 'block' }}
      /> 
      */}
    </Router>
  );
};

export default App;
