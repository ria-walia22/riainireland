import './App.css';
import NavBar from './componets/NavBar';
import HeroSection from './componets/HeroSection'
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import Home from './componets/pages/Home'
import Vlog1 from './componets/pages/Vlog1';
import Vlog3 from './componets/pages/Vlog3';
import Vlog2 from './componets/pages/Vlog2';
import Vlog4 from './componets/pages/Vlog4';
import Footer from './componets/pages/Footer';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vlog-1" element={<Vlog1 />} />
        <Route path="/vlog-2" element={<Vlog2 />} />
        <Route path="/vlog-3" element={<Vlog3 />} />
        <Route path="/vlog-4" element={<Vlog4 />} />

        </Routes>
        <Footer />
      </Router>
   </>
  );
}

export default App;
