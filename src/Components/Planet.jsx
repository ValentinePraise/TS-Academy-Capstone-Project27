import React from "react";
import myVideo from "../assets/plan-video2.mp4";

const Planet = () => {
  return (
    <div className="planet-container">
      <section className="planet-vid-container">
        <article className="planet-video-card planet-card">
          <video controls autoPlay muted loop playsInline>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </article>
        <article className="planet-vid-content planet-card">
          <h2>How Planetary Data Helps Us Understand Space</h2>
          <p>
            Planetary science goes beyond images. Comparing
            <span> mass, diameter, gravity </span>, and <span>density,</span> we
            gain insight into how planets form, behave, and interact within the
            solar system.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Planet;
