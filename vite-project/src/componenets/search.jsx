import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import Axios from "axios";

function Search({ change, darkMode }) {
  const [showRegion, setShowRegion] = useState(false);
  const [name, setName] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      change(`name/${name}`);
    }
  };
  return (
    <React.Fragment>
      <div>
        <section className="flex jcSb search-container spacing" on>
          <article className={darkMode ? "lightermode" : "slightlydarkmode"}>
            <div className="flex input-container">
              <GoSearch
                onClick={() => {}}
                className={darkMode ? "lightermode" : "slightlydarkmode"}
              />

              <input
                type="text"
                className={darkMode ? "lightermode" : "slightlydarkmode"}
                placeholder="Search for a country"
                onKeyPress={handleKeyPress}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </article>
          <div>
            <article className="mainregioncont">
              <div className={darkMode ? "lightermode" : "slightlydarkmode"}>
                <div
                  className="flex atc regioncont jcSb pointer"
                  onClick={() => {
                    setShowRegion((prevRegion) => !prevRegion);
                  }}
                >
                  <p> Filter by Region</p>
                  <AiOutlineDown
                    className={showRegion ? "arrowdown" : "arrowUp"}
                  />
                </div>
              </div>
              <div className={darkMode ? "lightermode" : "slightlydarkmode"}>
                <div
                  style={{
                    background: darkMode
                      ? "hsl(0, 0%, 100%)"
                      : "hsl(209, 23%, 22%)",
                    color: darkMode ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"

                  }}
                  className={showRegion ? "showregioncont1" : "regioncont1"}
                >
                  <div
                    onClick={() => {
                      change("region/africa");
                    }}
                  >
                    Africa
                  </div>
                  <div
                    onClick={() => {
                      change("region/america");
                    }}
                  >
                    {" "}
                    America
                  </div>
                  <div
                    onClick={() => {
                      change("region/asia");
                    }}
                  >
                    {" "}
                    Asia
                  </div>
                  <div
                    onClick={() => {
                      change("region/europe");
                    }}
                  >
                    Europe
                  </div>
                  <div
                    onClick={() => {
                      change("region/oceania");
                    }}
                  >
                    Oceania{" "}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Search;
