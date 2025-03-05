import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AnimatedNumber from "../components/AnimateNumber";

import Servicessection from "../components/Servicessection";
import ConsultNow from "../components/ConsultNow";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <Servicessection />
      <ConsultNow />
      <AboutSection />
    </div>
  );
};

export default Home;
