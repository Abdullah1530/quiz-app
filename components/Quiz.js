// components/Quiz.js
"use client";

import React, { useState } from 'react';
import styles from '../src/styles/Home.module.css';

const questions = [
  {
    question: "Who Is the Last Prophet Of Allah?",
    options: ["Hazrat Adam", "Hazrat Nooh", "Hazrat Muhammad", "Hazrat Ibrahim"],
    answer: "Hazrat Muhammad"
  },
  // Add more questions here
];

const Quiz = () => {
  const [state, setState] = useState({
    currentQuestion: 0,
    score: 0,
    answered: false,
  });

  const handleAnswer = (selectedOption) => {
    if (!state.answered) {
      const isCorrect = selectedOption === questions[state.currentQuestion].answer;
      setState((prevState) => ({
        ...prevState,
        score: isCorrect ? prevState.score + 1 : prevState.score,
        answered: true,
      }));
    }
  };

  const nextQuestion = () => {
    setState((prevState) => ({
      ...prevState,
      currentQuestion: prevState.currentQuestion + 1,
      answered: false,
    }));
  };

  const { currentQuestion, answered, score } = state;
  const question = questions[currentQuestion];

  return (
    <div className={styles.container}>
      {question ? (
        <>
          <h1 className={styles.heading}>Quiz App</h1>
          <div className={styles.question}>{question.question}</div>
          <ul className={styles.options}>
            {question.options.map((option, index) => (
              <li key={index} className={styles.option} onClick={() => handleAnswer(option)}>
                {option}
              </li>
            ))}
          </ul>
          {answered && (
            <button className={styles.button} onClick={nextQuestion}>
              {currentQuestion + 1 < questions.length ? "Next Question" : "See Results"}
            </button>
          )}
        </>
      ) : (
        <div className={styles.result}>
          <p>Quiz completed! Your score is {score} out of {questions.length}.</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
