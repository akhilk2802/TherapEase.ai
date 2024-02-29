import { React, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/css/Header.css";
import logo from "../assets/logo.png";
import Login from "./Login";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} height={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>

            {/* <Nav.Link href="/register">Register</Nav.Link> */}
            <Nav.Link href="/game">Game</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
