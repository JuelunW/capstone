import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Reservations from './components/Reservations';
import Menu from './components/Menu';
import Footer from './components/Footer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
