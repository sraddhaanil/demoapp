import { Link } from "react-router-dom";
import "../components_urbanic/Navbar.css";
export function Navbar() {
  return (
    <div className="navbar">
      <Link to="/newin" className="navlink text-white">
        Urbanic
      </Link>

      <Link to="/newin" className="navlink text-white">
        NEW IN
      </Link>

      <Link to="/christmas" className="navlink text-white">
        CHRISTMAS
      </Link>

      <Link to="/trending" className="navlink text-white">
        TRENDING
      </Link>

      <Link to="/occasion" className="navlink text-white">
        OCCASION
      </Link>

      <Link to="/campaing" className="navlink text-white">
        CAMPAING
      </Link>

      <Link to="/colorpop" className="navlink text-white">
        COLORPOP
      </Link>

      <Link to="/clothing" className="navlink text-white">
        CLOTHING
      </Link>

      <Link to="/dresses" className="navlink text-white">
        DRESSES
      </Link>

      <Link to="/knitwear" className="navlink text-white">
        kNITWEAR
      </Link>

      <Link to="/denim" className="navlink text-white">
        DENIM
      </Link>

      <Link to="/sports" className="navlink text-white">
        SPORTS
      </Link>

      <Link to="/swimmies" className="navlink text-white">
        SWIMMIES
      </Link>
    </div>
  );
}
