import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import TechStack from './Pages/TechStack';
import Contact from './Pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component
import Certificates from './Pages/Certificates';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/tech_stack" element={<TechStack />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
