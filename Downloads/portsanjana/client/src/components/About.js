import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>ABOUT</h2>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <p className="about-intro">
                Computer Science student at Lovely Professional University. Not here to participate — here to dominate.
              </p>
              <p className="about-description">
                Full-stack developer obsessed with scalable architecture, clean code, and solving problems that matter. 
                Every project is a statement. Every line of code is intentional.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">2</div>
                  <div className="stat-label">MAJOR PROJECTS</div>
                </div>
                <div className="stat">
                  <div className="stat-number">6</div>
                  <div className="stat-label">CERTIFICATIONS</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">HACKERRANK JAVA</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/SANJANA2.png" alt="Sanjana Rajbhar" className="about-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
