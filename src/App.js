import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toggle from './component/Toggle';
import Layout from './view/Layout';
import Home from './view/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/toggle" element={<Toggle />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
