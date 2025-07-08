import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Capitalized import
import React from "react";
import Division_Holding from "./pages/Division-Holding";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/division-Holding" element={<Division_Holding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
