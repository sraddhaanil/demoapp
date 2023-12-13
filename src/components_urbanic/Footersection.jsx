import React from "react";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footersection = () => {
  return (
    <footer className="white-section" id="footer">
      <div className="container-fluid">
        <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </div>
      <p className="footp">&copy; 2023 Urbanc. practice perpous only.</p>
    </footer>
  );
};

export default Footersection;
