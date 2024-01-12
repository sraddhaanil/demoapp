import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faCircleQuestion,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "../nav.component/Navbar.css";

function Navbar() {
  return (
    <div className="header-actions">
      <a href="/" className="logo">
        <span
          role="img"
          aria-label="brand"
          className="logo-icon"
          style={{ transform: "translateZ(0px)" }}>
          <div className="brand">
            <span>UrbanicStyles</span>
          </div>
        </span>
      </a>

      <nav className="category-nav">
        <ul className="categories">
          <li
            data-bee-click='{"target_type":"label","scene":"body:list","index":0,"extend":{"catId":511,"title":"NEW IN","uba":{"ec":"CATEGORY","el":"category:511:NEW IN"}}}'
            className="category-item"
            style={{ color: "rgb(0, 0, 0)" }}
            data-bee-active="">
            <span>NEW IN</span>
          </li>
          <li
            data-bee-click='{"target_type":"label","scene":"body:list","index":1,"extend":{"catId":890,"title":"CHRISTMAS","uba":{"ec":"CATEGORY","el":"category:890:CHRISTMAS"}}}'
            className="category-item"
            style={{ color: "rgb(0, 0, 0)" }}
            data-bee-active="">
            <span>CHRISTMAS</span>
          </li>
          {/* ... (additional list items) */}
          <li
            data-bee-click='{"target_type":"label","scene":"body:list","index":12,"extend":{"catId":"en-92FD8D3B-0CE0-4706-9B58-4D2DB83B5247","title":"ABOUT US","uba":{"ec":"CATEGORY","el":"category:en-92FD8D3B-0CE0-4706-9B58-4D2DB83B5247:ABOUT US"}}}'
            className="category-item pointer"
            style={{ color: "rgb(0, 0, 0)" }}
            data-bee-active="">
            <a href="/social-responsibility/about-us">ABOUT US</a>
          </li>
        </ul>
        <div className="switch">
          <span role="img" aria-label="arrow-left" className="switch-disabled">
            {/* SVG for arrow-left here */}
          </span>
          <span role="img" aria-label="arrow-right" className="switch-icon">
            {/* SVG for arrow-right here */}
          </span>
        </div>

        <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
        <FontAwesomeIcon icon={faUser} className="nav-icon" />
        <FontAwesomeIcon icon={faBagShopping} className="nav-icon" />
        <FontAwesomeIcon icon={faCircleQuestion} className="nav-icon" />
        <FontAwesomeIcon icon={faGlobe} className="nav-icon" />
      </nav>
    </div>
  );
}

export default Navbar;
