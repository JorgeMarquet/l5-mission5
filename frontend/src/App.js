import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Listing from "./pages/Listing.jsx";
import TenancyInformation from "./pages/TenancyInformation.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenancy-information" element={<TenancyInformation />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
  );
}

export default App;
