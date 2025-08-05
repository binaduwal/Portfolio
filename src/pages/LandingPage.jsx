import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";

const LandingPage = ({ theme, toggleTheme }) => {
  return (
    <section className="mx-auto container p-4 md:p-6">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Banner />
      <About />
      <Skills/>
      <Project/>
    </section>
  );
};

export default LandingPage;
