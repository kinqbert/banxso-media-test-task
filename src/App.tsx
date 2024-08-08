import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RocketPage from './pages/RocketPage';

import './App.scss'
import UnderDevelopment from './pages/UnderDevelopmentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rockets/:rocketId" element={<RocketPage />} />
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App
