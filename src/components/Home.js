import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import '../App.css';

const Home = () => {
    return (
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
};

export default Home;