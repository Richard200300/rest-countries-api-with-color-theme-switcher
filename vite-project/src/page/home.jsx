import React, { useState, useEffect } from "react";
import Navbar from "../componenets/navbar";
import Display from "../componenets/display";
import Search from "../componenets/search";
import Axios from "axios";
function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [allregion, setallregion] = useState([]);

  useEffect(() => {
    Axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setallregion(res.data);
    });
  }, []);

  function change(country) {
    Axios.get(`https://restcountries.com/v3.1/${country}`).then((res) => {
      setallregion(res.data);
    });
  }
  return (
    <React.Fragment>
      <main className="homepage">
        <div className={darkMode ? "lightmode" : "darkmode"}>
          <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
          <Search change={change} darkMode={darkMode}/>
          <Display allregion={allregion}  darkMode={darkMode}/>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
