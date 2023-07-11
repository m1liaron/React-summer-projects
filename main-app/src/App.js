import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import { HomePage, GhUserSearch, BmiCalculator, TicTacToe } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/gh' element={<GhUserSearch/>} />
        <Route path='/bmi' element={<BmiCalculator/>} />
        <Route path='/ticTacToe' element={<TicTacToe/>} />
      </Routes>
    </Router>
  );
}

export default App;
