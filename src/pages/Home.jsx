import React from "react";
import TopNavBar from "./shared-components/TopNavBar.jsx";
import Footer from "./shared-components/Footer.jsx";
import HomeMakeTheChange from "./HomeMakeTheChange.jsx";
import HomeCustReviews from "./HomeCustReviews.jsx";
import HomeTenantsHomeOwners from "./HomeTenantsHomeOwners.jsx";

export default function home() {
  return (
    <div>
      <TopNavBar />
      <HomeTenantsHomeOwners />
      <HomeCustReviews />
      <HomeMakeTheChange />
      <Footer />
    </div>
  );
}
