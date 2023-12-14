import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../components_urbanic/Navbar.css";

export function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSignInOut = () => {
    setLoggedIn(!isLoggedIn);

    if (isLoggedIn) {
      alert("Signed Out!");
    } else {
      alert("Signed In!");
    }
  };

  return (
    <div className="navbar">
      <nav class="navbar navbar-light bg-light ">
        <Link class="navbar-brand" to="/urbanic">
          Urbanic
        </Link>

        <Link to="/newin" className="navlink ">
          NEW IN
        </Link>

        <Link to="/christmas" className="navlink ">
          CHRISTMAS
        </Link>

        <Link to="/trending" className="navlink ">
          TRENDING
        </Link>

        <Link to="/occasion" className="navlink ">
          OCCASION
        </Link>

        <Link to="/campaing" className="navlink ">
          CAMPAING
        </Link>

        <Link to="/colorpop" className="navlink ">
          COLORPOP
        </Link>

        <Link to="/clothing" className="navlink ">
          CLOTHING
        </Link>

        <Link to="/dresses" className="navlink ">
          DRESSES
        </Link>

        <Link to="/knitwear" className="navlink ">
          KNITWEAR
        </Link>

        <Link to="/denim" className="navlink ">
          DENIM
        </Link>

        <Link to="/sports" className="navlink">
          SPORTSS
        </Link>

        <Link to="/swimmies" className="navlink">
          SWIMMIES
        </Link>

        <button onClick={handleSignInOut} className="btn-navlink">
          {isLoggedIn ? "Sign Out" : "Sign In"}
        </button>
      </nav>
    </div>
  );
}
