import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';

import './App.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/:taskId" element={<TaskPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App
