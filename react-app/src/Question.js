import React from 'react';

function Question({ data, handleAnswer, questionNumber, userAnswer, nextQuestion }) {
  const question = data[questionNumber];

  const isOptionSelected = (choice) => {
    return userAnswer === choice;
  };

  const handleOptionClick = (choice) => {
    handleAnswer(choice);
    nextQuestion();
  };

  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className={`option ${isOptionSelected(choice) ? 'selected' : ''}`}
            onClick={() => handleOptionClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
