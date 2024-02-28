# TherapEase.ai


# Mental Health Game Application

This is a mental health game application built with Node.js and React. The application allows users to play games using pictures, and based on the response times for each question, therapists can gain insights into the patient's mental state.

## Features

- Play mental health games using pictures. Similar to Pictionary.
- Track response times for each question.
- Therapists can gain insights into the patient's mental state based on response times.
- Therapist will be provided with the summary and visualization of all the parameters from the Pictionary Game
- We have classified the patients status it based on the parameters and behavioural patterns as stated by WHO.

## Technologies Used

- Node.js
- React
- Express.js
- MongoDB (optional, for storing user data and game results)
- Machine Learning Model - BART

- BART is a transformer encoder-encoder (seq2seq) model with a bidirectional (BERT-like) encoder and an autoregressive (GPT-like) decoder. BART is pre-trained by (1) corrupting text with an arbitrary noising function, and (2) learning a model to reconstruct the original text.
BART is particularly effective when fine-tuned for text generation (e.g. summarization, translation) but also works well for comprehension tasks (e.g. text classification, question answering). This particular checkpoint has been fine-tuned on CNN Daily Mail, a large collection of text-summary pairs.

BART -> https://huggingface.co/facebook/bart-large-cnn


## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/mental-health-game.git
    ```

2. Navigate to the project directory:

    ```
    cd mental-health-game
    ```

3. Install dependencies for the server:

    ```
    npm install
    ```

4. Navigate to the client directory:

    ```
    cd client
    ```

5. Install dependencies for the client:

    ```
    npm install
    ```

## Usage

1. Start the server:

    ```
    npm start
    ```

2. Start the client:

    ```
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

4. Play mental health games and track response times for each question.

