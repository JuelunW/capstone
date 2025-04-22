import React from 'react';


const Button = ({ text, onClick }) => {
    return (
        <button className="btn" onClick={onClick}>
            {text}
        </button>
    );
};

const Content = ({ children }) => {
    return (
        <div className="content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <p>Little Lemon is a family-owned Mediterranean restaurant located in Chicago, Illinois. We focus on traditional recipes served with a modern twist.</p>
            <p>Our mission is to provide our customers with the best dining experience possible, using only the freshest ingredients and traditional cooking methods.</p>
            <p>We are committed to sustainability and use locally sourced ingredients whenever possible.</p>
            <p>Our chefs are trained in traditional Mediterranean cooking techniques and are passionate about creating delicious, authentic dishes.</p>
            <p>We believe that food should be an experience, and we strive to create a warm and inviting atmosphere for our guests.</p>
            <p>Whether you're looking for a quick lunch, a romantic dinner, or a place to celebrate a special occasion, Little Lemon is the perfect choice.</p>
            <p>We offer a wide variety of dishes, including vegetarian and vegan options, to accommodate all dietary preferences.</p>
            <p>Our menu features a selection of appetizers, salads, entrees, and desserts, all made with the freshest ingredients.</p>
            <p>We also offer a selection of wines and cocktails to complement your meal.</p>
            <p>At Little Lemon, we believe that food should be enjoyed with family and friends, and we invite you to join us for a meal.</p>
            <p>We are open for lunch and dinner, and we also offer catering services for special events.</p>
            <p>Thank you for considering Little Lemon for your dining experience. We look forward to serving you soon!</p>
            <p>We are located at 1234 W. Main St., Chicago, IL 60614.</p>
            <p>For reservations, please call us at (123) 456-7890.</p>
            <p>Follow us on social media for updates and special offers!</p>
            <p>Instagram: @littlelemonchicago</p>
            <p>Facebook: Little Lemon Chicago</p>
            <p>Twitter: @littlelemonchi</p>
            <p>Thank you for choosing Little Lemon!</p>
            <p>We hope to see you soon!</p>
            <p>For more information, please visit our website at www.littlelemon.com.</p>
            <p>We are open Monday through Friday from 11:00 AM to 10:00 PM, and Saturday and Sunday from 10:00 AM to 11:00 PM.</p>
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