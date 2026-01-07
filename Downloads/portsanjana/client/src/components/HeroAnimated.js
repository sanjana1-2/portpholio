import React, { useEffect, useState } from 'react';

function HeroAnimated() {
  const [animateLetters, setAnimateLetters] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimateLetters(true);
  }, []);

  const renderLetters = (text) => {
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className={`letter-animate stagger-${(index % 10) + 1}`}
        style={{
          '--tx': `${Math.random() * 20 - 10}px`,
          '--ty': `${Math.random() * 20 - 10}px`,
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <section id="home" className="hero-animated">
      <div className="hero-background">
        <div className="hero-grain"></div>
        <div className="hero-breathe"></div>
      </div>

      <div className="container">
        <div className="hero-content-animated">
          <div className="profile-image-container-animated">
            <img src="/images/profile.png" alt="Sanjana Rajbhar" className="profile-image-animated" />
          </div>

          <h1 className="hero-headline">
            {animateLetters && renderLetters('SANJANA')}
            <br />
            {animateLetters && renderLetters('RAJBHAR')}
          </h1>

          <p className="hero-subtitle stagger-8">
            FULL STACK DEVELOPER
          </p>

          <p className="hero-tagline stagger-9">
            AMBITION. FOCUS. EXECUTION.
          </p>

          <p className="hero-description stagger-10">
            Building scalable systems. Solving complex problems. Claiming space in tech.
          </p>

          <div className="hero-buttons-animated stagger-10">
            <button className="btn btn-primary-animated">
              WITNESS MY WORK
            </button>
            <button className="btn btn-secondary-animated">
              MAKE CONTACT
            </button>
          </div>
        </div>
      </div>

      <div className="hero-divider"></div>
    </section>
  );
}

export default HeroAnimated;
