import React from 'react';
import Footer from './components/footer';
import Header from './components/header';

const App = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 bg-gray-100 p-8'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default App;
