# TherapEase.ai - Mental Health Game Application

## 📌 Overview
TherapEase.ai is an **AI-powered mental health game application** built with the **MERN stack** and **machine learning models** (BART & Stable Diffusion-XL). The application engages users with **Pictionary-style mental health games**, where **response times** provide **therapists with insights into a patient's mental state**. 

---

## 🚀 Features
- **Interactive Mental Health Games**: Play games similar to **Pictionary**, using AI-generated images.
- **AI-Generated Images**: **Stable Diffusion-XL** dynamically creates game images in real time.
- **Therapist Dashboard**:
  - Add new **questions** and assign **scores**.
  - Track **response times** to assess patient behavior.
  - View **summaries & visualizations** of patient performance.
- **Patient Classification**: Uses **WHO-defined behavioral patterns** to categorize patient status.
- **Insightful Analysis**: Helps therapists **evaluate mental health trends** based on user responses.

---

## 🛠️ Technologies Used
- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB (Optional, for storing user data & game results)
- **Machine Learning Models**:
  - **BART (Bidirectional & Autoregressive Transformer)**: Used for **text classification, summarization, and comprehension** tasks.
    - [BART Model](https://huggingface.co/facebook/bart-large-cnn)
  - **Stable Diffusion-XL**: Generates AI-powered images for the game.

---

## Folder Structure
```plaintext
├── Model
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   └── startup
└── frontend
    ├── public
    └── src
        ├── assets
        │   └── images
        │       ├── ClearThinking
        │       ├── Crying
        │       ├── DifficultDecisionMaking
        │       ├── Digestion
        │       ├── Fatigue
        │       ├── Frightened
        │       ├── Headache
        │       ├── LifeParticipation
        │       ├── Loss_appetite
        │       ├── LostInterest
        │       ├── Nervousness
        │       ├── NoEnjoyment
        │       ├── Selfworth
        │       ├── ShakingHands
        │       ├── Sleep
        │       ├── StomachDiscomfort
        │       ├── SuicidalThought
        │       ├── Tiredness
        │       ├── Unhappiness
        │       └── WorkSuffering
        ├── components
        └── styles
            ├── css
            └── scss
```

## 🔧 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/akhilk2802/TherapEase.ai.git
cd TherapEase.ai
```

### 2️⃣ Install Server Dependencies
```sh
cd backend
npm install
```

### 3️⃣ Install Client Dependencies
```sh
cd frontend
npm install
```

---

## 🚀 Usage
### 1️⃣ Start the Server
```sh
cd backend
node index.js
```

### 2️⃣ Start the Client
```sh
cd frontend
npm start
```

### 3️⃣ Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

- Play **mental health games**, and let the backend handle the analysis.
- **Therapists can view summaries & insights** in the **dashboard view**.

---

🚀 **Empowering Mental Health with AI - TherapEase.ai!**

