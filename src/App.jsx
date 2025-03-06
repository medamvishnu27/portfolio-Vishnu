import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import WaveBackground from './components/WaveBackground'; // Updated import path


const App = () => {
    return (
        <Router>
            <WaveBackground />
            <div className="app-content" style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/certificates" element={<Certificates />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
