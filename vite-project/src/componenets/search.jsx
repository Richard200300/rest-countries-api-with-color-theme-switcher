import React, { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import Axios from "axios";

function Search({ setallregion, region }) {
  const array = ["africa"]
  const [number, setNumber]= useState(0)
  const [showRegion, setShowRegion] = useState(false);
  useEffect(() => {
    if (region) {
      Axios.get(`https://restcountries.com/v3.1/region/${array[number]}`).then(
        (res) => {
          setallregion(res.data);
        }
      );
      
    } else {
      Axios.get("https://restcountries.com/v3.1/all").then((res) => {
        setallregion(res.data);
      });
    }
  }, []);


  return (
    <React.Fragment>
      <section className="flex jcSb search-container spacing">
        <article>
          <div className="flex input-container">
            <GoSearch />
            <input type="text" placeholder="Search for a country" />
          </div>
        </article>

        <article className="mainregioncont">
          <div
            className="flex atc regioncont jcSb pointer"
            onClick={() => {
              setShowRegion((prevRegion) => !prevRegion);
            }}
          >
            <p> Filter by Region</p>
            <AiOutlineDown className={showRegion ? "arrowdown" : "arrowUp"} />
          </div>

          <div className={showRegion ? "showregioncont1" : "regioncont1"}>
            <div onClick={()=> {
              onClick={()=> {
                onClick={setNumber(0)}
              }}
            }}> Africa</div>
            <div> America</div>
            <div > Asia</div>
            <div> Europe</div>
            <div> Oceania </div>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
}

export default Search;
