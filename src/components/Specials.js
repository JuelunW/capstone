import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'


const specials = [
    {
        id: 1,
        image: '/images/Greek salad-s.jpg',
        title: 'Greek Salad',
        price: "$12.99",
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
        id: 2,
        image: '/images/Bruchetta-s.jpg',
        title: 'Bruchetta',
        price: "$5.99",
        description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
        id: 3,
        image: '/images/lemon dessert.jpg',
        title: 'Lemon Dessert',
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
];

const card = specials.map(({ id, image, title, price, description }) => {
    return (
        <section className="specials-card" key={id} >
            <img src={image} alt={title} className='specials-card-image' />
            <article className="specials-card-container">
                <header className="title">
                    <h2>{title}</h2>
                    <p>{price}</p>
                </header>
                <p className="description" >{description}</p>
                <footer className="final">
                    <p>Order a delivery</p>
                    <img src="/images/bicycle.jpg" alt="bicycle" style={{ width: "20px" }} />
                </footer>
            </article>
        </section>
    );
});

const Cards = () => {
    return (
        <article className="specials-cards">
            {card}
        </article>
    );
};

const Specials = () => {
    return (
        <main className="specials" id="specials">
            <header className="specials-header">
                <h1>Specials</h1>
                <Link to="/menu" className="btn">Online Menu</Link>
            </header>
            <Cards />
        </main>
    );
}
export default Specials;