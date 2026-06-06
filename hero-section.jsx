import React from 'react';
import './style.css'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        
        {/* Media Section */}
        <div className="hero-section__media-wrapper">
          <div className="hero-section__video-container">
            <video 
              className="hero-section__video-player" 
              autoPlay 
              muted 
              loop 
              playsInline 
              src="/Planetary-body.mp4" /* Path assuming file is in the public folder */
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Play Icon Overlay */}
            <div className="hero-section__play-overlay">
              <div className="hero-section__play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            How Planetary Data Helps Us <br /> Understand Space
          </h1>
          <p className="hero-section__description">
            Planetary science goes beyond images. Comparing{' '}
            <span className="hero-section__highlight">mass</span>,{' '}
            <span className="hero-section__highlight">diameter</span>,{' '}
            <span className="hero-section__highlight">gravity</span>, and{' '}
            <span className="hero-section__highlight">density</span>, 
            we gain insight into how planets form, behave, and interact within the solar system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;