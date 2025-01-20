import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderApp from './components/headerApp';
import AboutUsApp from './components/aboutUsApp';
import FooterApp from './components/footerApp';

function App() {
  return (
    <Router>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<AboutUsApp />} />
          <Route path="/src/components/aboutUsApp.jsx" element={<AboutUsApp />} />
          <Route path="/productos" element={<h1>Productos</h1>} />
          <Route path="/contactanos" element={<h1>Contáctanos</h1>} />
        </Routes>
        <FooterApp />
    </Router>
  );
}

export default App;
