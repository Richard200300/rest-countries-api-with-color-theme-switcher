import React from "react";
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
function Navbar({ darkMode, setDarkMode }) {
  return (
    <React.Fragment>
      <div className={darkMode ? "lightermode" : "slightlydarkmode"}>
        <nav style={{
            background: darkMode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
            color: darkMode ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
          }} className="flex navbar jcSb atc spacing">
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
