import React, {useState} from "react";
import { AiOutlineDown } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

function Search() {
    const [showRegion, setShowRegion] = useState(false)

  return (
    <React.Fragment>
      <section className="flex jcSb search-container spacing">
        <article>
          <div className="flex input-container">
            <GoSearch />
            <input type="text" placeholder="Search for a country" />
          </div>
        </article>

        <article className="mainregioncont" >
          <div className="flex atc regioncont jcSb pointer" onClick={()=> {
            setShowRegion(prevRegion => !prevRegion)
        }}>
            <p> Filter by Region</p>
            <AiOutlineDown className={showRegion ? "arrowdown" : "arrowUp"}/>
          </div>

         
          <div className={showRegion ? "showregioncont1": "regioncont1"}>
            <div> Africa</div>
            <div> America</div>
            <div> Asia</div>
            <div> Europe</div>
            <div> Oceania </div>
          </div>

        </article>
      </section>
    </React.Fragment>
  );
}

export default Search;
