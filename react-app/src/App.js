import React, { useState } from 'react';
import Confetti from 'react-confetti';
import data from './data';
import Home from './Home';
import Question from './Question';
import Timer from './Timer';

function App() {
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [questionNumber, setQuestionNumber] = useState(0);
  const [quizStart, setQuizStart] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [difficulty, setDifficulty] = useState('fácil');
  const confettiWidth = window.innerWidth;
  const confettiHeight = window.innerHeight;

  const filteredData = data.filter(question => question.difficulty === difficulty);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    if (answer === filteredData[questionNumber].correctAnswer) {
      setScore(score + 1);
    }
    setAnswers([
      ...answers,
      { question: filteredData[questionNumber].question, userAnswer: answer, correctAnswer: filteredData[questionNumber].correctAnswer },
    ]);
  };

  const nextQuestion = () => {
    if (questionNumber === filteredData.length - 1) {
      if (score > 5) {
        setShowConfetti(true);
      }
    }
    setQuestionNumber(questionNumber + 1);
    setUserAnswer('');
  };

  const restartQuiz = () => {
    setScore(0);
    setUserAnswer('');
    setQuestionNumber(0);
    setAnswers([]);
    setShowConfetti(false);
    setQuizStart(false); // Retornar para a página inicial após reiniciar
  };

  return (
    <div className="App">
      {!quizStart ? (
        <Home startQuiz={() => setQuizStart(true)} setDifficulty={setDifficulty} />
      ) : questionNumber < filteredData.length ? (
        <>
          <Timer time={60} onTimeOut={nextQuestion} />
          <Question
            data={filteredData}
            handleAnswer={handleAnswer}
            questionNumber={questionNumber}
            userAnswer={userAnswer}
            nextQuestion={nextQuestion}
          />
        </>
      ) : (
        <div className="container">
          <h1 className='quizfinal'>Quiz Finalizado!</h1>
          <div className="result-box">
            <div>
              <h2>Respostas Certas: {score}</h2>
            </div>
            <div>
              <h2>Respostas Erradas: {filteredData.length - score}</h2>
            </div>
          </div>
          {answers.map((answer, index) => (
            <div key={index}>
              <h3>{answer.question}</h3>
              <p>Sua resposta: {answer.userAnswer} / Resposta correta: {answer.correctAnswer}</p>
            </div>
          ))}
          {showConfetti && (
            <Confetti width={confettiWidth} height={confettiHeight} />
          )}
          <button className="restart-button" onClick={restartQuiz}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default App;
