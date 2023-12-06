import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Player from "../components/Games";
import Footer from "../components/Footer";
import useTheme from "../hooks/useTheme";

const Homepage = () => {
  const { theme } = useTheme();
  document.body.setAttribute("data-bs-theme", theme);
  return (
    <div id="body" data-bs-theme={theme}>
      <Navbar />
      <Banner />
      <Expertise />
      <Projects />
      <Player />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Homepage;
