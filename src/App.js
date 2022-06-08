import React from 'react';
import About from './components/About';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <About />
      <img height={70} width={70} src='{logos}' alt='logos'/>
    </div>
  );
}

export default App;
