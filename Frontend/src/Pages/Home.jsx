import React from "react";
import Hero from "../Components/Hero";
import Gallery from "../Components/Gallery";
import Spotlight from "../Components/Spotlight";
import Collections from "../Components/Collections";
import Contact from "../Components/Contact";






const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Gallery />
        <Spotlight />
        <Collections />
        <Contact />
      </div>
    </>
  );
};

export default Home;
