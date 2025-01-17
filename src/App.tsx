import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StatisticalPrinciples from './pages/StatisticalPrinciples';
import PracticalSignificance from './pages/PracticalSignificance';
import CLTSampling from './pages/CLTSampling';

function App() {
  return (
    <Router basename="/-ds6371-unit-2-fls">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistical-principles" element={<StatisticalPrinciples />} />
          <Route path="/practical-significance" element={<PracticalSignificance />} />
          <Route path="/clt-sampling" element={<CLTSampling />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
