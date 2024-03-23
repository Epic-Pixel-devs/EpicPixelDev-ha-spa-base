import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './contents/pages/index';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
