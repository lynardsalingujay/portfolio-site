import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div>
      <Hero
        title="hello lynard"
        subTitle="this is subtitle"
        text="this is text"
      />
      <Carousel />
    </div>
  );
}

export default HomePage;
