import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Philosophy from './pages/Philosophy';
import Contact from './pages/Contact';

function App() {

  useEffect(() => {
    // Load Plausible script with correct domain
    const script = document.createElement('script');
    script.setAttribute('defer', '');
    script.setAttribute('data-domain', 'michaelamelendez.com');
    script.setAttribute('src', 'https://plausible.io/js/script.js');
    document.head.appendChild(script);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;