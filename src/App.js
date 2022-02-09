import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Layout from './view/Layout';
import Home from './view/Home';
import Tab from './component/Tab';
import HashTag from './component/HashTag';
import AutoComplete from './component/AutoComplete';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/tab" element={<Tab />} />
          <Route path="/hashTag" element={<HashTag />} />
          <Route path='/autoComplete' element={<AutoComplete />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
