import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import '../styles/Game.css'

function Game() {
  const [timer, setTimer] = useState(5);
  const [points, setPoints] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [error, setError] = useState(null);
  const [isWrong, setIsWrong] = useState();
  const [quizData, setQuizData] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const location = useLocation();
  const theme = location.state?.theme;

  useEffect(() => {
    const themeData = getData();
    setQuizData(themeData);
    console.log(themeData)
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const getData = () => {
    const data = localStorage.getItem('quizData');
    const themeData = JSON.parse(data);

    if (!themeData || !themeData[theme]) {
      setError('Algo deu errado!');
      return [];
    }


    return themeData[theme].questions;
  }

  const handleButton = (answer) => {
    if (answer === quizData[questionIndex].correct) {
      setPoints(points + 5);
      setIsCorrect(true)

    } else {
      setIsWrong(answer);
    }

    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
      setIsCorrect(null);
      setIsWrong(null);
    }, 3000);

  }

  if (error) {
    return (
      <>
        <h1>{error}</h1>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </>
    );
  }

  if (timer >= 0) {
    return (
      <>
        <h1 className="h1-timer">Começando em {timer}</h1>
        <p>{theme}</p>
      </>
    )
  }

  if (!quizData[questionIndex]) {
    return (
      <>
        <h1 className="h1-theme h1-points">
          Você fez {points} pontos
        </h1>
        <Link to="/themes">
          <button>
            Voltar
          </button>
        </Link>
      </>
    )
  }

  return (
    <>
      <h1 className="h1-theme">{theme}</h1>

      <p className="p-question">{quizData[questionIndex].question}</p>
      <div className="div-btn-answer">
        {quizData[questionIndex].answers.map((answer, index) => (
          <button
            className={` btn-answer
              ${quizData[questionIndex].correct === answer && isCorrect ? 'correct' : quizData[questionIndex].correct != answer && isWrong === answer ? 'wrong' : ''}`}
            disabled={isCorrect || isWrong}

            key={index}
            onClick={() => handleButton(answer)}
          >
            {answer}
          </button>
        ))}
      </div >
    </>
  );
}

export default Game;