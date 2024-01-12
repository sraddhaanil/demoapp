import Navbar from "./components_urbanic/nav.component/Navbar";
import PlayerComponent from "./components_urbanic/PlayerComponent";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footersection from "./components_urbanic/footer.component/Footersection";
import Mainsection from "./components_urbanic/Mainsection";
import Category from "./components_urbanic/card.component/Category";
import Infocus from "./components_urbanic/Infocus";
import Bestsellers from "./components_urbanic/Bestsellers";
import Moodcomp from "./components_urbanic/Moodcomp";
import Mer from "./components_urbanic/card.dress.component/Mer";
import Halter from "./components_urbanic/card.dress.component/Halter";
import Cut from "./components_urbanic/card.dress.component/Cut";
import Body from "./components_urbanic/card.dress.component/Body";
import Lace from "./components_urbanic/card.dress.component/Lace";
import Viewmore from "./components_urbanic/Viewmore";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <PlayerComponent />
                <Mainsection />
                <Category />
                <Infocus />
                <Bestsellers />
                <Moodcomp />
              </div>
            }
          />

          <Route path="/mermaid-skirt" element={<Mer />} />
          <Route path="/patch-top" element={<Halter />} />
          <Route path="/cutout-dress" element={<Cut />} />
          <Route path="/bodycon-dress" element={<Body />} />
          <Route path="/laceup-dress" element={<Lace />} />
          <Route path="/viewmore" element={<Viewmore />} />
        </Routes>
        <Footersection />
      </HashRouter>
    </div>
  );
}

export default App;
