import { Navbar } from "./components_urbanic/Navbar";
import PlayerComponent from "./components_urbanic/PlayerComponent";
import UseEffect from "./components_urbanic/UseEffect";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import { HashRouter, Routes } from "react-router-dom";
import Mainsection from "./components_urbanic/Mainsection";
import Footersection from "./components_urbanic/Footersection";

function App() {
  return (
    <div>
      <HashRouter />
      <header />
      <Navbar />
      <Routes />
      <Routes />
      <Mainsection />
      <PlayerComponent />
      <UseEffect />
      <Footersection />
    </div>
  );
}

export default App;
