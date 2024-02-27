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
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicSubmit" className="mb-3">
          <Button variant="secondary" type="submit" className="login-button">
            Login
          </Button>
        </Form.Group>
        <h6>
          New user ? <a href="/register">click here</a>
        </h6>
      </Form>
    </Container>
  );
};

export default Login;
