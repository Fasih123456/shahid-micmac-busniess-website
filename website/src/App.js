import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Divisons from "./Pages/Divisions";
import Downloads from "./Pages/Downloads";
import Products from "./Pages/Products";
import Sectors from "./Pages/Sectors";
import Aboutus from "./Pages/Aboutus";
import ErrorPage from "./Pages/404";
import Contact from "./Pages/Contact";
import Refining from "./Pages/Subpages/Sectors/Refining";
import Power from "./Pages/Subpages/Sectors/Power";
import PertoChemical from "./Pages/Subpages/Sectors/PertoChemical";
import OilGas from "./Pages/Subpages/Sectors/OilGas";
import Marine from "./Pages/Subpages/Sectors/Marine";
import Infustructure from "./Pages/Subpages/Sectors/Infustructure";
import Industries from "./Pages/Subpages/Sectors/Industries";

import "./App.css";
import "./assets/css/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/divisions" element={<Divisons />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Sectors" element={<Sectors />} />
        <Route path="/Sectors/Refining" element={<Refining />} />
        <Route path="/Sectors/Marine" element={<Marine />} />
        <Route path="/Sectors/OilGas" element={<OilGas />} />
        <Route path="/Sectors/Power" element={<Power />} />
        <Route path="/Sectors/Industries" element={<Industries />} />
        <Route path="/Sectors/Infrastructure" element={<Infustructure />} />
        <Route path="/Sectors/Petrochemical" element={<PertoChemical />} />
        <Route path="/Sectors/Refining" element={<Refining />} />

        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
