import React, { useState, useEffect } from "react";
import Navbar from "../componenets/navbar";
import Display from "../componenets/display";
import Search from "../componenets/search";
import Axios from "axios";
function Home() {
  const [allregion, setallregion] = useState([]);
  const [region, setregion] = useState(true);

  useEffect(() => {
  
      Axios.get("https://restcountries.com/v3.1/all").then((res) => {
        setallregion(res.data);
      });
    
  }, []);

  return (
    <React.Fragment>
      <main className="homepage">
        <Navbar />
        <Search region={region} setallregion={setallregion} />

        <div className="grid-2 spacing">
          {allregion?.map((item) => {
            return (
              <div>
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
        <Display />
      </main>
    </React.Fragment>
  );
}

export default Home;
