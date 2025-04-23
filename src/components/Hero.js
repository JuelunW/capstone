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
        <div width={20}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Little Lemon is a family-owned Mediterranean restaurant located in Chicago, Illinois. We focus on traditional recipes served with a modern twist.</p>
            {children}
        </div>
    );
};

const Img = () => {
    return (
        <div className="img">
            <img src="/images/restaurantfood.jpg" alt="Restaurant food" width={200} />
        </div>
    );
};

const Hero = () => {
    return (
        <div className="Hero">
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