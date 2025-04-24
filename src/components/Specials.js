import React from 'react';
import '../App.css';


const specials = [
    {
        image: '/images/Greek salad-s.jpg',
        title: 'Greek Salad',
        price: "$12.99",
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
        image: '/images/Bruchetta-s.jpg',
        title: 'Bruchetta',
        price: "$5.99",
        description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
        image: '/images/lemon dessert.jpg',
        title: 'Lemon Dessert',
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
];

const Cards = (props) => {
    const card = props.data.map(({ image, title, price, description }) => {
        return (
            <div className="specials-card" >
                <img src={image} alt={title} className='specials-card-image' />
                <div className="specials-card-container">
                    <div className="title">
                        <h2>{title}</h2>
                        <p>{price}</p>
                    </div>
                    <p className="description" >{description}</p>
                    <div className="final">
                        <p>Order a delivery</p>
                        <img src="/images/bicycle.jpg" alt="bicycle" style={{ width: "20px" }} />
                    </div>
                </div>
            </div>
        );
    }
    );

    return (
        <div className="specials-cards">
            {card}
        </div>
    );
};

const Specials = () => {
    return (
        <div className="specials" id="specials">
            <div className="specials-header">
                <h1>Specials</h1>
                <button className="btn" onClick={() => { }}>Online Menu</button>
            </div>
            <Cards data={specials} />
        </div>
    );
}
export default Specials;