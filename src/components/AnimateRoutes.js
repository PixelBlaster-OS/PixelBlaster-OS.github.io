import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import About from './About';
import Devices from './Devices';
import Home from './Home';

const AnimateRoutes = () => {
  const location=useLocation();
  return (
    <AnimatePresence exitBeforeEnter >
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/devices" element={<Devices />} />
    </Routes>
  </AnimatePresence >
  )
}

export default AnimateRoutes