import React from "react";
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
function Navbar({ darkMode, setDarkMode }) {
  return (
    <React.Fragment>
      <div className={darkMode ? "lightermode" : "slightlydarkmode"}>
        <nav className="flex navbar jcSb atc spacing">
          <h1>Where in the world?</h1>

          <div
            className="flex atc gap-5"
            onClick={() => {
              setDarkMode((prevmode) => !prevmode);
            }}
          >
           
            {darkMode ?  <BsMoon /> : <BsMoonFill />}
            <p>Dark Mode</p>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
