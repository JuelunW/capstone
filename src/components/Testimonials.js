import React from 'react';
import '../App.css';

const data = [
  {
    id: 1,
    name: "Anna",
    image: "/images/Anna.jpeg",
    stars: 5,
    comment: "Authentic flavors and a friendly staff. A must-visit!"
  },
  {
    id: 2,
    name: "Sarah",
    image: "/images/Sarah.jpeg",
    stars: 5,
    comment: "Hidden gem with fantastic Mediterranean dishes!"
  },
  {
    id: 3,
    name: "Tim",
    image: "/images/Tim.jpeg",
    stars: 5,
    comment: "The best Mediterranean food I've ever had! Highly recommend the falafel."
  },
  {
    id: 4,
    name: "Steve",
    image: "/images/Steve.jpeg",
    stars: 5,
    comment: "A delightful experience! The staff is friendly and the food is delicious."
  },
];

const rollingCard = data.map(({ id, name, image, stars, comment }) => {
  return (
    <section className="rolling-card" key={id}>
      <img src={image} alt="Client" />
      <p className="name">{name}</p>
      <p className="stars">{stars}</p>
      <p className="comment">{comment}</p>
    </section>
  );
});

const Testimonials = () => {
  return (
    <main className="testimonials">
      <h1>What Our Clients Say</h1>
      <img src='/images/Dish icon.svg' alt="left arrow" className="left-arrow" />
      <article className="container">
        {rollingCard}
      </article>
      <img src='/images/Dish icon.svg' alt="right arrow" className="right-arrow" />
    </main>
  );
}

export default Testimonials;