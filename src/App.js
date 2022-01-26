import './App.css';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Profile from './components/Pages/Profile';
import Appearance from './components/Pages/Appearance';
import Pages from './components/Pages';
import Login from './components/Login';
import Signup from './components/Signup';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './components/Theme';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <div className="App">
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Pages />}>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/appearance"
                element={<Appearance setTheme={setTheme} />}
              />
              <Route path="*" element={<Home />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route index path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
