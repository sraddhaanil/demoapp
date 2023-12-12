import { Navbar } from "./components_urbanic/Navbar";
import PlayerComponent from "./components_urbanic/PlayerComponent";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import { HashRouter, Routes } from "react-router-dom";
import Footersection from "./components_urbanic/Footersection";
import Mainsection from "./components_urbanic/Mainsection";
import Category from "./components_urbanic/Category";
import Infocus from "./components_urbanic/Infocus";
import Bestsellers from "./components_urbanic/Bestsellers";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />

        <Routes />
        <Routes />
        <PlayerComponent />
        <Mainsection />
        <Category />
        <Infocus />
        <Bestsellers />
        <Footersection />
      </HashRouter>
    </div>
  );
}

export default App;
