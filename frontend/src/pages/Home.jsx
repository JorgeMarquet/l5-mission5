import React from "react";
import TopNavBar from "./shared-components/TopNavBar.jsx";
import Footer from "./shared-components/Footer.jsx";
import HomeMakeTheChange from "./HomeMakeTheChange.jsx";
import HomeTenantsHomeOwners from "./HomeTenantsHomeOwners.jsx";
import HomeMainServices from "./HomeMainServices.jsx";
import HomeCarousel1 from "./HomeCarousel1.jsx";
import HomeCarousel2 from "./HomeCarousel2.jsx";

export default function home() {
  return (
    <div>
      <TopNavBar />
      <HomeMainServices />
      <HomeCarousel1 />
      <HomeTenantsHomeOwners />
      <HomeCarousel2 />
      <HomeMakeTheChange />
      <Footer />
    </div>
  );
}
