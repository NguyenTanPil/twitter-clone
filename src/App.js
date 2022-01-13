import './App.css';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import Pages from './components/Pages';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Pages />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route index path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
