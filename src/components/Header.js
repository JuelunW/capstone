import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <a href="/#about" style={{padding: "0 5px"}}>About</a>
            <Link to="/menu" style={{padding: "0 5px"}}>Menu</Link>
            <Link to="/reservations" style={{padding: "0 5px"}}>Reservations</Link>
            <a href="#online order" style={{padding: "0 5px", whiteSpace: "nowrap"}}>Online order</a>
        </nav>
    );
};

const Logo = () => {
    return (
        <img src="/images/Logo-s.jpg" alt="Logo" className="logo" />
    );
};

const Header = () => {
    return (
        <main className='header'>
            <Logo />
            <Nav />
        </main>
    );
};

export default Header;
