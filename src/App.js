import React, { useState } from "react";

import Navbar2 from "./Components/Navbar2";
import Footer from "./Components/Footer";
import { UserContext } from "./Components/States/User";
import AnimatedRoutes from "./Components/AnimatedRoutes";

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
        <AnimatedRoutes />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
