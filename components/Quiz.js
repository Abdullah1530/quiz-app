"use client";

import React, { useState } from 'react';
import Question from './Question';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
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
        <div className="container">
            {question ? (
                <>
                    <h1>Quiz App</h1>
                    <div className="question">{question.question}</div>
                    <ul className="options">
                        {question.options.map((option, index) => (
                            <li key={index} className="option" onClick={() => handleAnswer(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                    {answered && (
                        <button className="button" onClick={nextQuestion}>
                            {currentQuestion + 1 < questions.length ? "Next Question" : "See Results"}
                        </button>
                    )}
                </>
            ) : (
                <div className="result">
                    <p>Quiz completed! Your score is {score} out of {questions.length}.</p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
