import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Wedgets from './components/Wedgets';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar />
      <Feed />
      <Wedgets />
    </div>
  );
}

export default App;
