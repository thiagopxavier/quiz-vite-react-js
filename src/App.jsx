import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Themes from './pages/Themes';
import Game from './pages/Game';

function App() {
  return (
    <Routes>
      <Route path='/themes' element={<Themes />} />
      <Route path='/game' element={<Game />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
