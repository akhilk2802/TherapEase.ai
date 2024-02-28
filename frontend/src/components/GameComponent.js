import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/css/GameComponent.css";
import axios from "axios";
import headache4 from "../assets/images/Headache/output.png";
import headache1 from "../assets/images/Headache/output2.png";
import headache2 from "../assets/images/Headache/output3.png";
import headache3 from "../assets/images/Headache/output4.png";
import poorApe1 from "../assets/images/Loss_appetite/output.png";
import poorApe2 from "../assets/images/Loss_appetite/output2.png";
import poorApe3 from "../assets/images/Loss_appetite/output3.png";
import poorApe4 from "../assets/images/Loss_appetite/output4.png";
import sleep1 from "../assets/images/Sleep/output.png";
import sleep2 from "../assets/images/Sleep/output2.png";
import sleep3 from "../assets/images/Sleep/output3.png";
import { useState, useEffect } from "react";

const GameComponent = () => {
  const headache = [headache1, headache2, headache3, headache4];
  const poorApe = [poorApe1, poorApe2, poorApe3, poorApe4];
  const sleep = [sleep1, sleep2, sleep3];
  const scenarios = [
    {
      question: "What does the image depict ?",
      option1: "The patient often has headaches",
      option2: "The patient doesn't often have headaches",
      picture: headache,
    },
    {
      question: "Is your appetite poor?",
      option1: "The patient's appetite is poor",
      option2: "The patient's appetite is not poor",
      picture: poorApe,
    },
    {
      question: "Do you sleep badly?",
      option1: "The patient sleeps badly.",
      option2: "The patient doesn't sleep badly",
      picture: sleep,
    },
    { question: "", option1: "", option2: "", picture: "" },
    { question: "", option1: "", option2: "", picture: "" },
    { question: "", option1: "", option2: "", picture: "" },
  ];

  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  const getRandomPicture = () => {
    const pictures = scenarios[currentScenarioIndex].picture;
    const randomIndex = Math.floor(Math.random() * pictures.length);
    return pictures[randomIndex];
  };

  const handleAnswer = async (option) => {
    const url = "http://127.0.0.1:8000/api/questions/";
    const body = {
      question: scenarios[currentScenarioIndex].question,
      answer: option,
    };
    console.log("body :" + body.question, body.answer);
    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response.response.data);
    } catch (error) {
      if (error.response.data) {
        setError(error.response.data);
      }
      console.error("Error submitting form:", error.response.data);
    }
    setSelectedOption(option);

    setCurrentScenarioIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Container className="two-column-layout">
      <Row>
        <Col md={6} className="left-column">
          <img src={getRandomPicture()} height="500rem" />
          <p>Scenario Image.</p>
        </Col>
        <Col md={6} className="right-column">
          <Row className="right-row">
            <h2>{scenarios[currentScenarioIndex].question}</h2>
          </Row>
          <Row className="right-row">
            <Button
              className="button-option"
              onClick={() =>
                handleAnswer(scenarios[currentScenarioIndex].option1)
              }
            >
              {scenarios[currentScenarioIndex].option1}
            </Button>
            <Button
              className="button-option"
              onClick={() =>
                handleAnswer(scenarios[currentScenarioIndex].option2)
              }
            >
              {scenarios[currentScenarioIndex].option2}
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GameComponent;
