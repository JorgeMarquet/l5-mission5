import React from "react";
import TopNavBar from "./shared-components/TopNavBar.jsx";
import Footer from "./shared-components/Footer.jsx";
import HomeMakeTheChange from "./HomeMakeTheChange.jsx";

export default function home() {
  return (
    <div>
      <TopNavBar />
      <HomeMakeTheChange />
      <Footer />
    </div>
  );
}
