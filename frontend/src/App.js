import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Listing from "./pages/Listing.jsx";
import TenancyInformation from "./pages/TenancyInformation.jsx";
import PropertiesListings from "./pages/PropertiesListings.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenancy-information" element={<TenancyInformation />} />
        <Route path="/properties-for-rent" element={<PropertiesListings />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
  );
}

export default App;
