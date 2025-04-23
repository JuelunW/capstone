import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

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