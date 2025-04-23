import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Reservations from './components/Reservation';
import Menu from './components/Menu';
import Footer from './components/Footer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
