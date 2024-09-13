import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Themes from './pages/Themes';
import Game from './pages/Game';

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/themes' element={<Themes />} />
        <Route path='/game' element={<Game />} />

      </Routes>
    </>
  )
}

export default App
