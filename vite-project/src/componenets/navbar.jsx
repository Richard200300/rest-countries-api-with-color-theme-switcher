import React from "react";
import {BsMoon} from "react-icons/bs"
function Navbar() {
  return (
    <React.Fragment>
      <nav className="flex navbar jcSb atc spacing">
        <h1>Where in the world?</h1>

        <div className="flex atc">
            <BsMoon />
          <p>Dark Mode</p>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
