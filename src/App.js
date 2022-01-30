import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Cookies from 'universal-cookie';
import './App.css';
import Login from './components/Login';
import Pages from './components/Pages';
import Appearance from './components/Pages/Appearance';
import Home from './components/Pages/Home';
import Message from './components/Pages/Message';
import Profile from './components/Pages/Profile';
import Root from './components/Root';
import Signup from './components/Signup';
import getTheme from './components/Theme';
import GlobalStyle from './GlobalStyles';

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
              <Route path="/message" element={<Message />} />
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
