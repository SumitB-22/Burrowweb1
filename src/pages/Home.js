import React from 'react';
import Hero from '../components/Hero';
import './Home.css';
import introVideo from '../assets/intro.mp4'; 
import inva from '../assets/inva.png';

const Home = () => (
  <main>
    <Hero />
    <section className="video-section">
      <h2>Our Introduction Video</h2>
      <div className="video-container">
        <video width="560" height="315" controls>
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    <section className="trusted-section">
      <h2>Trusted and Mentored By</h2>
      <div className="company">
        <img src={inva} alt="Company Name" />
        
      </div>
    </section>
  </main>
);

export default Home;