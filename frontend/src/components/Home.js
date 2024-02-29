import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/css/Home.css";
import Login from "./Login";

const Home = () => {
  return (
    <Container className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to TherapEase.ai</h1>
        <p>Coming soon, under construction!</p>
        {/* <Container className="form-container">
          <Button href="/login" variant="secondary" type="submit">
            Login
          </Button>
        </Container> */}
      </div>
    </Container>
  );
};

export default Home;
