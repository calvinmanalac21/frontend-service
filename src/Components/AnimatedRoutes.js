import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserContext } from "./States/User";
import Home from "./Home";
import Documentations from "./Documentations";
import Profile from "./Profile";
import AboutUs from "./AboutUs";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  const { user } = useContext(UserContext);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile value={user} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/documentations" element={<Documentations />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
