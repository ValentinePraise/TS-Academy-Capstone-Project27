import React from "react";

const Table = () => {
  return (
    <div>
      <div className="planetary-facts">
        <h2 id="planetary" className="planet-facts-header">
          Planetary Facts at a Glance
        </h2>
        <p className="planet-facts-text">
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <br />

        <p className="table-caption">
          Data about the planets of our solar system (Planetary facts taken from
          Nasa)
        </p>

        {/* <!-- Table section --> */}
        <table id="explore" className="planetary-table">
          <thead>
            <tr scope="col">
              <th colSpan="2" className="table-header-1"></th>

              <th className="table-header-1">Name</th>
              <th className="table-header-1">Mass (10 24kg)</th>
              <th className="table-header-1">Diameter (km)</th>
              <th className="table-header-1">Density (kg/m3)</th>
              <th className="table-header-1">Gravity (m/s2)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th
                scope="row"
                colSpan="2"
                rowSpan="4"
                className="table-header-2"
              >
                Terrestial Planets
              </th>
              <td>Mercury</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td>Venus</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td>Earth</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td>Mars</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <th scope="row" rowSpan="4" className="table-header-2">
                Jovian planets
              </th>
              <th scope="row" rowSpan="2" className="table-header-2">
                Gas Giants
              </th>
              <td>Jupiter</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td>Saturn</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <th scope="row" rowSpan="2" className="table-header-2">
                Ice Giants
              </th>
              <td>Uranus</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>

            <tr>
              <td>Neptune</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th scope="row" colSpan="2" className="table-header-2">
                Dwarf Giants
              </th>
              <td>Pluto</td>
              <td>0.330</td>
              <td>4,878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
