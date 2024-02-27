import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/css/GameComponent.css";

const GameComponent = () => {
  return (
    <Container className="layout-container">
      <Row>
        {/* Left Column */}
        <Col md={6} className="left-column">
          <h2>Scenario and image</h2>
          <p>This is the content of the left column.</p>
        </Col>

        {/* Right Column */}
        <Col md={6} className="right-column">
          <Row className="right-row">
            {/* Right Top Row */}
            <Col>
              <h2>Questions with scenario</h2>
              <p>This is the content of the top row in the right column.</p>
            </Col>
          </Row>

          <Row className="right-row">
            {/* Right Bottom Row */}
            <Col>
              <h2>Answers</h2>
              <p>This is the content of the bottom row in the right column.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GameComponent;
