import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

const Content = ({ children }) => {
    return (
        <article className="hero-content">
            <header>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </header>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
            {children}
        </article>
    );
};

const Hero = () => {
    return (
        <main className="hero">
            <Content>
                <Link to="/reservations" className="btn">Reserve a Table</Link>
            </Content>
            <img src="/images/restaurantfood.jpg" alt="Restaurant food" className="hero-image" />
        </main>
    );
}
export default Hero;