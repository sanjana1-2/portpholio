import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src="/images/profile.png" alt="Sanjana Rajbhar" className="profile-image" />
          </div>
          <h1>
            <span className="highlight">SANJANA</span>
            <br />
            RAJBHAR
          </h1>
          <p className="subtitle">FULL STACK DEVELOPER</p>
          <p className="subtitle" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            AMBITION. FOCUS. EXECUTION.
          </p>
          <p className="description">
            Building scalable systems. Solving complex problems. Claiming space in tech.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">WITNESS MY WORK</a>
            <a href="#contact" className="btn btn-secondary">MAKE CONTACT</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
