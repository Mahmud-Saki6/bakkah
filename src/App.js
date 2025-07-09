import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Capitalized import
import React from "react";
import Division_Holding from "./pages/Division-Holding";
import NotFound from "./pages/NotFound";
import DivisionHealthCare from "./pages/DivisionHealthCare";
import DivisionTrade from "./pages/DivisionTrade";
import DivisionPower from "./pages/DivisionPower";
import DivisionAviation from "./pages/DivisionAviation";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/division-Holding" element={<Division_Holding />} />
          <Route path="/divisionHealthCare" element={<DivisionHealthCare />} />
          <Route path="/divisionTrade" element={<DivisionTrade />} />
          <Route path="/divisionPower" element={<DivisionPower />} />
          <Route path="/divisionAviation" element={<DivisionAviation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
