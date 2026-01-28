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
    // Load Plausible script
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute(
      'src',
      'https://plausible.io/js/pa-Wz9135KhLTe8voomm0uwT.outbound-links.js'
    );
    document.head.appendChild(script);

    // Initialize Plausible
    const initScript = document.createElement('script');
    initScript.innerHTML = `
      window.plausible = window.plausible || function () {
        (plausible.q = plausible.q || []).push(arguments)
      }, plausible.init = plausible.init || function (i) {
        plausible.o = i || {}
      };
      plausible.init()
    `;
    document.head.appendChild(initScript);
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