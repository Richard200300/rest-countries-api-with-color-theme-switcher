import React from "react";

function Display({ allregion, darkMode }) {
  return (
    <React.Fragment>
      <div className={darkMode ? "lightmode" : "darkmode"} >
        <div className="grid-2 spacing">
          {allregion?.map((item) => {
            return (
              <div key={item.flags.png} className={darkMode ? "lightermode" : "slightlydarkmode"}>
                <div className="countryContainer">
                  <div className="flags">
                    <img
                      src={item.flags.png}
                      alt={item.flags.alt}
                      className="flagsimg"
                    />
                  </div>

                  <div className="secondPartContainer">
                    <h2 className="country">{item.name.common}</h2>
                    <p>
                      <span className="bold">Population</span>:{" "}
                      {item.population}
                    </p>
                    <p>
                      <span className="bold">Capital</span>: {item.capital}
                    </p>
                    <p>
                      <span className="bold">Region</span>: {item.region}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Display;
