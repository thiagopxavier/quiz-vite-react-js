import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='div-main-app'>
      <h1>GAME</h1>
      <h2>Quiz</h2>
      <Link to='/themes'>
        <button>
          JOGAR
        </button>
      </Link>
    </div>
  );
}

export default Home;