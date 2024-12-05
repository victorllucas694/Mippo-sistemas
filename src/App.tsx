import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Home from './Pages/Home';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
    </>
  );
};

export default App;