import React, { useState } from 'react';
import QuestionList from './QuestionList';
import QuizCss from './Quiz.css';

export default function Quiz() {
    const questions = [
    {
        question: 'What is react?',
        options: ['CSS Framework', 'JS Library', 'JS Framework', 'Testing Tool'],
        answer: "JS Library"
    },
    {
        question: '2+2?',
        options: ['4', '5', '6', '7'],
        answer: "4"
    }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const handleClick = (option) => {
        setCurrentAnswer(option);

        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
    }

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    }

    return (
    <div>
        {currentQuestionIndex<questions.length? <div>
        <QuestionList 
        question={questions[currentQuestionIndex].question} 
        options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer}
        />
        <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
        </div> : <div>
        <h3>You scored {score} out of {questions.length}</h3>
        </div>}
    </div>
    );
}
