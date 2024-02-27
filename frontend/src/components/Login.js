import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/css/Login.css";

const Login = () => {
  return (
    <Container className="login-container">
      <Form className="login-form">
        <div className="login-form-header">
          <h2>Login</h2>
        </div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-button">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
