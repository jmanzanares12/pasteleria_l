import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import { routes } from './routes/routes.jsx';


const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 bg-gray-100 p-8'>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
