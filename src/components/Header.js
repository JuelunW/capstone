import React from 'react';
import '../App.css';


const Nav = () => {
    return (
        <nav className='Nav'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#reservations">Reservations</a>
            <a href="#online order">Online order</a>
            <a href="/login">Login</a>
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
