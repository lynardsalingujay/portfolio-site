import React from 'react';
import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';
import Content from '../components/Content';

function HomePage(props) {
  return (
    <div>
      <Hero
        title='Dev / Student'
        subTitle='Based in Auckland'
        text='Skills and Interests: Python, Java, React, Vue, Docker, Cybersecurity'
      />
      <Content>
        <p>
          Vue Project #1:{' '}
          <a
            href='https://lynardsalingujay-vue-profile-ran-gen.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            Generate Random Profile
          </a>
        </p>
      </Content>
    </div>
  );
}

export default HomePage;
