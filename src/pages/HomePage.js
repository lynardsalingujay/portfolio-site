import React from 'react';
import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';

function HomePage(props) {
  return (
    <div>
      <Hero
        title='Dev / Student'
        subTitle='Based in Auckland'
        text='Skills: Python, Java, React, Docker'
      />
    </div>
  );
}

export default HomePage;
