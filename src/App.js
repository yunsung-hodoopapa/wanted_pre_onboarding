import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toggle from './component/Toggle';
import Modal from './component/Modal'
import Layout from './view/Layout';
import Home from './view/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/toggle" element={<Toggle />}/>
          <Route path='/modal' element={<Modal />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
