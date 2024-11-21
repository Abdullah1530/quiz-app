"use client";

import { useState } from 'react';
import Question from './Question';

const questions = [
  // Your questions here
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 text-center border border-gray-300 rounded-lg shadow-lg">
      {!showResult ? (
        <Question 
          question={questions[currentQuestion].question} 
          options={questions[currentQuestion].options} 
          onOptionClick={handleOptionClick} 
          selectedOption={selectedOption} 
        />
      ) : (
        <div className="result-container">
          <h2 className="text-2xl font-bold">Your Score: {score} / {questions.length}</h2>
          <button onClick={handleTryAgain} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
