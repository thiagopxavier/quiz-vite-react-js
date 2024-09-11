import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchQuizData } from '../services/quizApi';

const Themes = () => {
  const [quizData, setQuizData] = useState({});

  useEffect(() => {
    async function loadQuizData() {
      const data = await fetchQuizData();
      setQuizData(data)
    }
    loadQuizData();
  }, []);

  return (
    <div>
      <h1>Temas</h1>
      {Object.keys(quizData).map((theme, index) => (
        <div key={index}>
          <button className='btn-theme'>{theme}</button>
        </div>))}
      <Link to="/"><p>Voltar</p></Link>
    </div>
  );
};

export default Themes;
