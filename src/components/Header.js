import React from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

const Header = function() {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Personal Assistant</Navbar.Brand>
        <Nav>
          <Nav.Link className="mx-1" href="#home">Home</Nav.Link>
          <Nav.Link className="mx-1" href="#features">Features</Nav.Link>
          <Nav.Link className="mx-1" href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;