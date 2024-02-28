import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/css/Registration.css";

const Register = () => {
  return (
    <Container className="registration-container">
      <Form className="registration-form">
        <div className="registration-form-header">
          <h2>Registration Form</h2>
        </div>
        <Row>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicName"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicDOB"
            >
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicMaritalStatus"
            >
              <Form.Label>Marital Status</Form.Label>
              <Form.Select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>{" "}
            </Form.Group>
          </Col>
        </Row>

        <Form.Group
          className="registration-form-group"
          controlId="formBasicProfession"
        >
          <Form.Label>What category matches your profession</Form.Label>
          <Form.Select>
            <option value="healthcare">Healthcare and Medicine</option>
            <option value="infoTech">Information Technology (IT)</option>
            <option value="education">Education</option>
            <option value="finance">Finance and Business</option>
            <option value="legal">Legal and Law Enforcement</option>
            <option value="arts">Arts and Entertainment</option>
            <option value="social">Social Services</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          className="registration-form-group"
          controlId="formBasicWeight"
        >
          <Form.Label>Weight</Form.Label>
          <Form.Control type="number" placeholder="Kilogram" />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicHeightFeet"
            >
              <Form.Label>Height (Feet)</Form.Label>
              <Form.Control type="number" placeholder="Feet" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicHeightInches"
            >
              <Form.Label>Height (Inches)</Form.Label>
              <Form.Control type="number" placeholder="Inches" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group
          className="registration-form-group"
          controlId="formBasicContact"
        >
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your contact" />
        </Form.Group>

        {/* <Form.Group className="registration-form-group" controlId="formRole">
          <Form.Label>Who are you?</Form.Label>
          <Form.Control as="select">
            <option value="">Select One</option>
            <option value="Admin">Admin</option>
            <option value="Group">Group</option>
            <option value="Patient">Patient</option>
            <option value="Therapist">Therapist</option>
          </Form.Control>
        </Form.Group> */}

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
