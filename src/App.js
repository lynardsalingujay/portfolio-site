import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lynard Salingujay",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "The Future Wide Open",
        subTitle: "Project Awesome",
        text: "checkout my projects",
      },
      about: {
        title: "About Me",
        subTitle: "Project Awesome",
        text: "checkout my projects",
      },
      contact: {
        title: "Contact Me",
        subTitle: "Project Awesome",
        text: "checkout my projects",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Lynard Salingujay</NavBar.Brand>
            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

          <Route
            path="/"
            exact
            render={() => <HomePage title={this.state.home.title} />}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
