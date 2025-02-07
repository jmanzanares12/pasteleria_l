import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderApp from './components/headerApp';
import FooterApp from './components/footerApp';
import HomeApp from './pages/homeApp';
import ProductApp from './pages/productApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/pasteleria_l'
          element={
            <>
              <HeaderApp />
              <HomeApp />
              <FooterApp />
            </>
          } />

        <Route
          path='/productos'
          element={
            <>
              <HeaderApp />
              <ProductApp />
              <FooterApp />
            </>
          } />
      </Routes>
    </Router>
  );
}

export default App;
