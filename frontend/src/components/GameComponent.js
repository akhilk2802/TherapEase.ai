import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/css/GameComponent.css";
import axios from "axios";
import { useState, useEffect } from "react";

import scenarios from "./scenarionData.js";

const GameComponent = () => {
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [clickTimes, setClickTimes] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);

  const getRandomPicture = () => {
    const pictures = scenarios[currentScenarioIndex].picture;
    const randomIndex = Math.floor(Math.random() * pictures.length);
    return pictures[randomIndex];
  };

  useEffect(() => {
    setStartTime(new Date().getTime());
  }, []);

  const handleAnswer = async (option) => {
    const body = {
      question: scenarios[currentScenarioIndex].question,
      answer: option,
      patientId: "65deb4faeb9ffee77d1d743c",
      responseTime: "",
    };

    const currentTime = new Date().getTime();
    setClickTimes((prevClickTimes) => [...prevClickTimes, currentTime]);

    if (startTime !== null) {
      const timeDifference = (currentTime - startTime) / 1000;
      console.log(`Time since start: ${timeDifference} seconds`);
      body.responseTime = timeDifference;
    }

    if (clickTimes.length >= 1) {
      const lastClickTime = clickTimes[clickTimes.length - 1];
      const timeDifference1 = (currentTime - lastClickTime) / 1000;
      console.log(`Time between clicks: ${timeDifference1} seconds`);
      body.responseTime = timeDifference1;
    }

    const url = "http://127.0.0.1:8000/api/questions/";

    console.log("body :" + body.question, body.answer);
    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response);
    } catch (error) {
      // if (error.response.data) {
      //   setError(error.response.data);
      // }
      console.error("Error submitting form:", error);
    }
    setSelectedOption(option);

    setCurrentScenarioIndex((prevIndex) => prevIndex + 1);
  };
  const handleFinish = async () => {
    const url = "http://127.0.0.1:8000/api/questions/patientId";
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {}
  };

  return (
    <>
      {currentScenarioIndex < scenarios.length && (
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
      )}
      {currentScenarioIndex === scenarios.length && (
        <Container className="container-completed">
          <h2>Game Completed!</h2>
          <Button className="button-finish" onClick={handleFinish}>
            Finish
          </Button>
        </Container>
      )}
    </>
  );
};

export default GameComponent;
