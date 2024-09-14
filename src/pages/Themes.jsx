import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchQuizData } from '../services/quizApi';

import '../styles/Theme.css'

const Themes = () => {
  const [quizData, setQuizData] = useState({});
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadQuizData() {
      try {
        const data = await fetchQuizData();
        setQuizData(data)
      } catch (error) {
        console.log(error)
        setError('Algo deu errado!')
      }


    }
    loadQuizData();
  }, []);

  const handleButton = (theme) => {
    navigate('/game', { state: { theme } });
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

  return (
    <div>
      <h1>Temas</h1>
      <div className='div-btn-theme'>
        {Object.keys(quizData).map((theme, index) => (
          <button
            key={index}
            onClick={() => handleButton(theme)}
            className='btn-theme'
          >
            {theme}</button>
        ))}
      </div>
    </div>
  );
};

export default Themes;
