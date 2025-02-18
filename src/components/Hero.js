import React from 'react';
import './Hero.css';
import About from '../pages/About';

const Hero = () => (
  <section className="hero">
    <h1>Welcome to Burrow Space!</h1>
    <p>Your Data, Your Control—Seamlessly.</p>
    <a href="/about" className="button">Learn More</a>
  </section>
);

export default Hero;