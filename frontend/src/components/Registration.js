import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../styles/css/Registration.css";

const Register = () => {
  return (
    <Container className="registration-container">
      <Form className="registration-form">
        <div className="registration-form-header">
          <h2>Registration Form</h2>
        </div>
        <Form.Group
          className="registration-form-group"
          controlId="formBasicName"
        >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group
          className="registration-form-group"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group
          className="registration-form-group"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Choose a password" />
        </Form.Group>

        <Form.Group
          className="registration-form-group"
          controlId="formBasicDOB"
        >
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group
          className="registration-form-group"
          controlId="formBasicContact"
        >
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your contact" />
        </Form.Group>

        <Form.Group className="registration-form-group" controlId="formRole">
          <Form.Label>Who are you?</Form.Label>
          <Form.Control as="select">
            <option value="">Select One</option>
            <option value="Admin">Admin</option>
            <option value="Group">Group</option>
            <option value="Patient">Patient</option>
            <option value="Therapist">Therapist</option>
          </Form.Control>
        </Form.Group>

        <Button
          variant="secondary"
          type="submit"
          className="registration-button"
        >
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
