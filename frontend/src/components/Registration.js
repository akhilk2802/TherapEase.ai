import { React, useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "../styles/css/Registration.css";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    maritalStatus: "",
    profession: "",
    weight: "",
    height: "",
    gender: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const url = "http://127.0.0.1:8000/api/patients/";

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response.response.data);
      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      if (error.response.data) {
        setError(error.response.data);
      }
      console.error("Error submitting form:", error.response.data);
    }
  };

  return (
    <Container className="registration-container">
      <Form onSubmit={HandleSubmit} className="registration-form">
        <div className="registration-form-header">
          <h2>Registration Form</h2>
        </div>
        <h6>{error && <Alert variant="danger">{error}</Alert>}</h6>
        <Row>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicName"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
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
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicMaritalStatus"
            >
              <Form.Label>Marital Status</Form.Label>
              <Form.Select
                defaultValue=""
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <option value="">Choose</option>
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
          <Form.Select
            defaultValue=""
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option value="">Choose</option>
            <option value="healthcare">Healthcare and Medicine</option>
            <option value="infoTech">Information Technology (IT)</option>
            <option value="education">Education</option>
            <option value="finance">Finance and Business</option>
            <option value="legal">Legal and Law Enforcement</option>
            <option value="arts">Arts and Entertainment</option>
            <option value="social">Social Services</option>
          </Form.Select>{" "}
        </Form.Group>

        <Form.Group
          className="registration-form-group"
          controlId="formBasicWeight"
        >
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            onChange={handleChange}
            value={formData.weight}
            placeholder="Kilogram"
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group
              className="registration-form-group"
              controlId="formBasicHeightFeet"
            >
              <Form.Label>Height (Feet)</Form.Label>
              <Form.Control
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Feet"
              />
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
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your contact"
          />
        </Form.Group>

        <Form.Group
          className="registration-form-group"
          controlId="formBasicGender"
        >
          <Form.Label>Gender</Form.Label>
          <Form.Select
            name="gender"
            defaultValue=""
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Choose</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
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
