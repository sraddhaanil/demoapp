import { Navbar } from "./components_urbanic/Navbar";
import PlayerComponent from "./components_urbanic/PlayerComponent";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footersection from "./components_urbanic/Footersection";
import Mainsection from "./components_urbanic/Mainsection";
import Category from "./components_urbanic/Category";
import Infocus from "./components_urbanic/Infocus";
import Bestsellers from "./components_urbanic/Bestsellers";
import Moodcomp from "./components_urbanic/Moodcomp";
import Mer from "./components_urbanic/Mer";

function App() {
  return (
    <div>
      <HashRouter>
        {/*<Navbar />
        <PlayerComponent />
        <Mainsection />
        <Category />
        <Infocus />
        <Bestsellers />
        <Moodcomp />
  <Footersection />*/}
        <Routes >
           <Route path="/dress" element={<Mer/>}/>
        </Routes >
        
      </HashRouter>
    </div>
  );
}

export default App;
