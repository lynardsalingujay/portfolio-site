import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div>
      <Hero
        // title="Software Developer"
        subTitle="Software Developer"
        text="Based in Auckland"
      />
      <Carousel />
    </div>
  );
}

export default HomePage;
