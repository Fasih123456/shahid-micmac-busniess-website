import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Divisons from "./Pages/Divisions";
import Downloads from "./Pages/Downloads";
import Partners from "./Pages/Partners";
import Sectors from "./Pages/Sectors";
import Aboutus from "./Pages/Aboutus";
import ErrorPage from "./Pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/divisions" element={<Divisons />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/Sectors" element={<Sectors />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
