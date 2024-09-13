import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchQuizData } from '../services/quizApi';

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
      <h1>Temas</h1>
      {Object.keys(quizData).map((theme, index) => (
        <div key={index}>
          <button
            onClick={() => handleButton(theme)}
            className='btn-theme'
          >
            {theme}</button>
        </div>))}
      <Link to="/"><p>Voltar</p></Link>
    </div>
  );
};

export default Themes;
