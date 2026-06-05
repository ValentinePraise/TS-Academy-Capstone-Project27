import React from "react";
import { useState, useEffect } from "react";

const Cards = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(
          "https://anurella.github.io/json/planets.json",
        );
        const data = await response.json();
        setPlanets(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="card-container" id="planet-cards">
      <h2>Visualizing the Differences Between Planets</h2>
      <p>
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>

      <div className="grid-planet-cards">
        {planets.map((planet) => (
          <div key={planet.planet} className="grid-planet-card">
            <figure>
              <img src={planet.image} alt="" />
            </figure>
            <p>Planet Name: {planet.planet}</p>
            <p>Distance From Sun: {planet.distanceFromSun}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
