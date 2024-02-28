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
import fright1 from "../assets/images/Frightened/output.png";
import fright2 from "../assets/images/Frightened/output2.png";
import fright3 from "../assets/images/Frightened/output3.png";
import clrThnk from "../assets/images/ClearThinking/output.png";
import clrThnk2 from "../assets/images/ClearThinking/output2.png";
import clrThnk3 from "../assets/images/ClearThinking/output3.png";
import clrThnk4 from "../assets/images/ClearThinking/output4.png";
import crying1 from "../assets/images/Crying/output0.png";
import crying2 from "../assets/images/Crying/output1.png";
import crying3 from "../assets/images/Crying/output2.png";

import digestion1 from "../assets/images/Digestion/output.png";
import digestion2 from "../assets/images/Digestion/output2.png";
import digestion3 from "../assets/images/Digestion/output3.png";

import decision1 from "../assets/images/DifficultDecisionMaking/output.png";
import decision2 from "../assets/images/DifficultDecisionMaking/output2.png";
import decision3 from "../assets/images/DifficultDecisionMaking/output3.png";

import fatigue1 from "../assets/images/Fatigue/output.png";
import fatigue2 from "../assets/images/Fatigue/output2.png";
import fatigue3 from "../assets/images/Fatigue/output3.png";

import lifeParticipation1 from "../assets/images/LifeParticipation/output.png";
import lifeParticipation2 from "../assets/images/LifeParticipation/output2.png";
import lifeParticipation3 from "../assets/images/LifeParticipation/output3.png";

import lostInterest1 from "../assets/images/LostInterest/output.png";
import lostInterest2 from "../assets/images/LostInterest/output2.png";
import lostInterest3 from "../assets/images/LostInterest/output3.png";

// Nervousness
import nervousness1 from "../assets/images/Nervousness/output.png";
import nervousness2 from "../assets/images/Nervousness/output2.png";
import nervousness3 from "../assets/images/Nervousness/output3.png";
// Add more images from the Nervousness folder as needed

// Selfworth
import selfworth1 from "../assets/images/Selfworth/output.png";
import selfworth2 from "../assets/images/Selfworth/output2.png";
import selfworth3 from "../assets/images/Selfworth/output3.png";
// Add more images from the Selfworth folder as needed

// ShakingHands
import shakingHands1 from "../assets/images/ShakingHands/output.png";
import shakingHands2 from "../assets/images/ShakingHands/output2.png";
import shakingHands3 from "../assets/images/ShakingHands/output3.png";
// Add more images from the ShakingHands folder as needed

// StomachDiscomfort
import stomachDiscomfort1 from "../assets/images/StomachDiscomfort/output.png";
import stomachDiscomfort2 from "../assets/images/StomachDiscomfort/output2.png";
import stomachDiscomfort3 from "../assets/images/StomachDiscomfort/output3.png";
// Add more images from the StomachDiscomfort folder as needed

// SuicidalThought
import suicidalThought1 from "../assets/images/SuicidalThought/output.png";
import suicidalThought2 from "../assets/images/SuicidalThought/output2.png";
import suicidalThought3 from "../assets/images/SuicidalThought/output3.png";
// Add more images from the SuicidalThought folder as needed

// Tiredness
import tiredness1 from "../assets/images/Tiredness/output.png";
import tiredness2 from "../assets/images/Tiredness/output2.png";
import tiredness3 from "../assets/images/Tiredness/output3.png";
// Add more images from the Tiredness folder as needed

// Unhappiness
import unhappiness1 from "../assets/images/Unhappiness/output.png";
import unhappiness2 from "../assets/images/Unhappiness/output2.png";
import unhappiness3 from "../assets/images/Unhappiness/output3.png";
// Add more images from the Unhappiness folder as needed

// WorkSuffering
import workSuffering1 from "../assets/images/WorkSuffering/output1.png";
import workSuffering2 from "../assets/images/WorkSuffering/output2.png";
import workSuffering3 from "../assets/images/WorkSuffering/output3.png";
// Add more images from the WorkSuffering folder as needed

const headache = [headache1, headache2, headache3, headache4];
const poorApe = [poorApe1, poorApe2, poorApe3, poorApe4];
const sleep = [sleep1, sleep2, sleep3];
const fright = [fright1, fright2, fright3];
const clearThinking = [clrThnk, clrThnk2, clrThnk3, clrThnk4];
const nervousness = [nervousness1, nervousness2, nervousness3];
const selfworth = [selfworth1, selfworth2, selfworth3];
const shakingHands = [shakingHands1, shakingHands2, shakingHands3];
const stomachDiscomfort = [
  stomachDiscomfort1,
  stomachDiscomfort2,
  stomachDiscomfort3,
];
const suicidalThought = [suicidalThought1, suicidalThought2, suicidalThought3];
const tiredness = [tiredness1, tiredness2, tiredness3];
const unhappiness = [unhappiness1, unhappiness2, unhappiness3];
const workSuffering = [workSuffering1, workSuffering2, workSuffering3];
const digestion = [digestion1, digestion2, digestion3];
const decision = [decision1, decision2, decision3];
const fatigue = [fatigue1, fatigue2, fatigue3];
const lifeParticipation = [
  lifeParticipation1,
  lifeParticipation2,
  lifeParticipation3,
];
const crying = [crying1, crying2, crying3];

const scenarios = [
  {
    question: "Do you often have headaches?",
    option1: "The patient often has headaches.",
    option2: "The patient doesn't often have headaches.",
    picture: headache,
  },
  {
    question: "Is your appetite poor?",
    option1: "The patient's appetite is poor.",
    option2: "The patient's appetite is not poor.",
    picture: poorApe,
  },
  {
    question: "Do you sleep badly?",
    option1: "The patient sleeps badly.",
    option2: "The patient doesn't sleep badly.",
    picture: sleep,
  },
  {
    question: "Are you easily frightened?",
    option1: "The patient is easily frightened.",
    option2: "The patient is not easily frightened.",
    picture: fright,
  },
  {
    question: "Do your hands shake?",
    option1: "The patient's hands shake.",
    option2: "The patient's hands don't shake.",
    picture: shakingHands,
  },
  {
    question: "Do you feel nervous, tense, or worried?",
    option1: "The patient feels nervous, tense, or worried.",
    option2: "The patient doesn't feel nervous, tense, or worried.",
    picture: nervousness,
  },
  {
    question: "Is your digestion poor?",
    option1: "The patient's digestion is poor.",
    option2: "The patient's digestion is not poor.",
    picture: digestion,
  },
  {
    question: "Do you have trouble thinking clearly?",
    option1: "The patient has trouble thinking clearly.",
    option2: "The patient doesn't have trouble thinking clearly.",
    picture: clearThinking,
  },
  {
    question: "Do you feel unhappy?",
    option1: "The patient feels unhappy.",
    option2: "The patient doesn't feel unhappy.",
    picture: unhappiness,
  },
  {
    question: "Do you cry more than usual?",
    option1: "The patient cries more than usual.",
    option2: "The patient doesn't cry more than usual.",
    picture: crying,
  },
];
export default scenarios;
