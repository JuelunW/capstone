import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <img src='/images/logo footer.png' alt="Logo" className="footer-logo" />
            <nav className="footer-nav">
                <Link to="/">Home</Link>
                <a href="/#about">About Us</a>
                <a href="/#specials">Specials</a>
                <Link to="/reservations">Reservations</Link>
            </nav>
            <nav className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src='/images/facebook.png' alt="Facebook" />
                    <figcaption>Facebook</figcaption>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src='/images/x.png' alt="X" />
                    <figcaption>X</figcaption>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src='/images/instagram.png' alt="Instagram" />
                    <figcaption>Instagram</figcaption>
                </a>
            </nav>
            <nav className="footer-contact">
                <p>Address:<br />1234567890</p>
                <p>Phone:<br />+1234567890</p>
                <p>Email:<br />1234567890@email.com</p>
            </nav>
            <p>&copy; 2025 Little Lemon. All rights reserved.</p>
        </footer>
    );
}

export default Footer;