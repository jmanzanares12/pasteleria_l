import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderApp from './components/headerApp';
import FooterApp from './components/footerApp';
import HomeApp from './pages/homeApp';
import ProductApp from './pages/productApp';

function App() {
  return (
    <Router>
      <HeaderApp />
      <Routes>
        {/* Página de inicio y quienes somos (comparten estructura) */}
        <Route path="/" element={<HomeApp />} />
        <Route path="/quienes-somos" element={<HomeApp />} />

        {/* Página de productos con su propio contenido */}
        <Route path="/productos" element={<ProductApp />} />
      </Routes>
      <FooterApp />
    </Router>
  );
}

export default App;
