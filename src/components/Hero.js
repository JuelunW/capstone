import React from 'react';
import '../App.css';


const Button = ({ text, onClick }) => {
    return (
        <button className="btn" onClick={onClick}>
            {text}
        </button>
    );
};

const Content = ({ children }) => {
    return (
        <div className="hero-content">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </div>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
            {children}
        </div>
    );
};

const Img = () => {
    return (
        <div className="hero-image-container">
            <img src="/images/restaurantfood.jpg" alt="Restaurant food" className="hero-image" />
        </div>
    );
};

const Hero = () => {
    return (
        <div className="hero">
            <Content>
                <Button text="Reserve a Table" onClick={() => {
                    alert('Reservation made!');
                }} />
            </Content>
            <Img />
        </div>
    );
}
export default Hero;