import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo-container">
                <img src='/images/logo footer.png' alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-nav">
                <Link to="#home">Home</Link>
                <a href="#about">About Us</a>
                <a href="#specials">Specials</a>
                <Link to="#reservations">Reservations</Link>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src='/images/facebook.png' alt="Facebook" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src='/images/twitter.png' alt="Twitter" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src='/images/instagram.png' alt="Instagram" />
                </a>
            </div>
            <div className="footer-contact">
                <p>Address: 1234567890</p>
                <p>Phone: +1234567890</p>
                <p>Email: 1234567890@mail.com</p>
            </div>
            <p>&copy; 2025 Little Lemon. All rights reserved.</p>
        </footer>
    );
}

export default Footer;