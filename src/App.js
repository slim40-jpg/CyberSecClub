import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import CTF from './pages/CTF';
import Workshops from './pages/Workshops';
import NotFound from './pages/NotFound';
import TeamPage from './pages/Team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ctf" element={<CTF />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
