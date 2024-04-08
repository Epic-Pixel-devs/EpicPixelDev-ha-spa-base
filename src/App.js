import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './contents/pages/index';
import ForgotPassword from './contents/pages/forgotPassword';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
