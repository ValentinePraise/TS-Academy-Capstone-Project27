import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <article className="hero-card card-content">
          <h2>Explore Our Solar System Through Data</h2>
          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>
          <div className="btns">
            <button>Explore the Data</button>
            <button>Contact Us</button>
          </div>
        </article>
        <article className="hero-card img-card">
          <figure>
            <img src="src/assets/images/planet.png" width={"200px"} height={"200px"} alt="" srcset="" />
          </figure>
        </article>
      </section>
    </div>
  );
};

export default Hero;
