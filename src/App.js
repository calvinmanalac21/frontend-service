import React, { useState } from "react";
import Profile from "./Components/Profile";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Navbar2 from "./Components/Navbar2";
import Footer from "./Components/Footer";
import { UserContext } from "./Components/States/User";
import Documentations from "./Components/Documentations";

const App = () => {
  const [user, setUser] = useState({
    name: "Vanessa Solis",
    alt: "Profile photo",
    description:
      "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    position: "Software Engineer",
    imgsrc:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile value={user} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/documentations" element={<Documentations />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
