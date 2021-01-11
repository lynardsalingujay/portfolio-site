import React from "react";
import Hero from "../components/Hero";

import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Lynard is passionate about technology. He worked in the IT industry
          for the past several years. With a problem-solving mindset, Lynard is
          a self-motivated, collaborative, and a team player with a can-do
          attitude. He is interested in DevOps approach and like to write
          scripts for automation. He's well experienced with Python and Docker
          and constantly striving to take on new challenges that will add new
          skills to his toolbox.
        </p>
        <p>
          He is a husband to Sheryl and a father to Jairus and Kiefer. A
          family-oriented person who like to travel around the country with his
          family. Lynard is a member of The Church of Jesus Christ of Latter-Day
          Saints.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
