import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className='Nav'>
            <Link to="/">Home</Link>
            <a href="/#about">About</a>
            <Link to="/menu">Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <a href="#online order">Online order</a>
        </nav>
    );
};

const Logo = () => {
    return (
        <img src="/images/Logo.jpg" alt="Logo" width={200} />
    );
};

const Header = () => {
    return (
        <div className='Header'>
            <Logo />
            <Nav />
        </div>
    );
};

export default Header;
