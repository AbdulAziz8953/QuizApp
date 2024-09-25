import React from 'react';

export default function QuestionList({ question, options, handleClick, currentAnswer }) { // Destructure the props
    return (
        <div>
        <h3>{question}</h3>
        <ul>
            {options.map((option, index) => (
            <li key={index} onClick={() => handleClick(option)} className={currentAnswer === option ? 'selected' : ''}>{option}</li>
            ))}
        </ul>
        </div>
    );
}
