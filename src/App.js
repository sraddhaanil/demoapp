import { Navbar } from "./components_urbanic/Navbar";
import PlayerComponent from "./components_urbanic/PlayerComponent";
import UseEffect from "./components_urbanic/UseEffect";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import { HashRouter, Routes } from "react-router-dom";
import Footersection from "./components_urbanic/Footersection";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        
        <Routes />
        <Routes />
        <PlayerComponent />
        <UseEffect />
        <Footersection />
      </HashRouter>
    </div>
  );
}

export default App;
