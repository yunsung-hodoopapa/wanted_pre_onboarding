import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Layout from './view/Layout';
import Home from './view/Home';
import Tab from './components/Tab';
import HashTag from './components/HashTag';
import AutoComplete from './components/AutoComplete';
import ClickToEdit from './components/ClickToEdit';
import GlobalStyle from './view/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/tab" element={<Tab />} />
          <Route path="/hashTag" element={<HashTag />} />
          <Route path="/autoComplete" element={<AutoComplete />} />
          <Route path="/clickToEdit" element={<ClickToEdit />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
