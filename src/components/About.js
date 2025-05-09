import React from 'react';
import '../App.css';

const About = () => {
    return (
        <main id="about" className='about'>
            <article className='about-container'>
                <h1>About Us</h1>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </article>
            <img src="/images/Mario and Adrian A.jpg" alt="Mario and Adrian A" className="about-image" />
        </main>
    );
}
export default About;