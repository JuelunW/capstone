import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
