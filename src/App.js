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
import getTheme from './components/Theme';
import { useState } from 'react';
import Root from './components/Root';
import Cookies from 'universal-cookie';

function App() {
  const [theme, setTheme] = useState(() => {
    const cookies = new Cookies();
    if (cookies.get('theme')) {
      return cookies.get('theme');
    }
    return { background: 'light', color: 'blue' };
  });

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Root>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Pages />}>
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/appearance"
                element={<Appearance theme={theme} setTheme={setTheme} />}
              />
              <Route path="*" element={<Home />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route index path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Root>
    </ThemeProvider>
  );
}

export default App;
