import React from 'react';
import Hero from '../components/Hero';

import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          I am a highly motivated IT professional, specializing in software
          development and systems support, and I have proven in-depth
          international experience working with major global corporations and
          start-up enterprises.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
