"use client";

import { useState } from 'react';
import Question from './Question';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    // Add more questions here
];

const initialState = {
    currentQuestion: 0,
    score: 0,
    answered: false,
};

const Quiz = () => {
    const [state, setState] = useState(initialState);

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
        <div>
            {question ? (
                <>
                    <Question 
                        question={question.question} 
                        options={question.options} 
                        handleAnswer={handleAnswer} 
                    />
                    {answered && (
                        <button onClick={nextQuestion}>
                            {currentQuestion + 1 < questions.length ? "Next Question" : "See Results"}
                        </button>
                    )}
                </>
            ) : (
                <p>Quiz completed! Your score is {score} out of {questions.length}.</p>
            )}
        </div>
    );
};

export default Quiz;
