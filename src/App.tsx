import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RocketPage from './pages/RocketPage';

import './App.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:rocketId" element={<RocketPage />} />
      </Routes>
    </Router>
  );
}

export default App
