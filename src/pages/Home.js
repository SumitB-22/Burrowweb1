import React from 'react';
import Hero from '../components/Hero';
import './Home.css';
import introVideo from '../assets/intro.mp4'; 
import inva from '../assets/inva.png';
import About from './About';

const Home = () => (
  <main>
    <Hero />
    <section className="trusted-section">
      <h2>Trusted and Mentored By</h2>
      <div className="company">
        <img src={inva} alt="Company Name" />
      </div>
    </section>
  </main>
);

export default Home;