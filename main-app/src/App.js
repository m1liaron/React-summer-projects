import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import { HomePage, GhUserSearch } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/gh' element={<GhUserSearch/>} />
      </Routes>
    </Router>
  );
}

export default App;
