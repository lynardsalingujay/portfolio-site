import React from "react";
import Card from "../components/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import astronaut from "../assets/images/astronaut.jpg";
import mac from "../assets/images/mac.jpg";
import macbook from "../assets/images/macbook.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "hello",
          subTitle: "subHello",
          imgSrc: astronaut,
          link: "http://devgrub.com",
          selected: false,
        },
        {
          id: 1,
          title: "hello",
          subTitle: "subHello",
          imgSrc: mac,
          link: "http://youtube.com",
          selected: false,
        },
        {
          id: 2,
          title: "hello",
          subTitle: "subHello",
          imgSrc: macbook,
          link: "http://google.com",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
