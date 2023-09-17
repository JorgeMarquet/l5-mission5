import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";
import TenancyInformation from "./pages/TenancyInformation.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenancy-information" element={<TenancyInformation/>}/>
      </Routes>
    </div>
  );
}

export default App;
