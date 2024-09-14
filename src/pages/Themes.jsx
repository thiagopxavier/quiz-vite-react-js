import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuizData } from '../services/quizApi';

import '../styles/Theme.css'

const Themes = () => {
  const [quizData, setQuizData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function loadQuizData() {
      const data = await fetchQuizData();
      setQuizData(data)
    }
    loadQuizData();
  }, []);

  const handleButton = (theme) => {
    navigate('/game', { state: { theme } });
  }

  return (
    <div>
      <h1 >Temas</h1>
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
