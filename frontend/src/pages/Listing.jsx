import React from "react";
import TopNavBar from "./shared-components/TopNavBar.jsx";
import ListingHeader from "./ListingHeader.jsx";
import ListingDetails from "./ListingDetails.jsx";
import ListingLocation from "./ListingLocation.jsx";
import Footer from "./shared-components/Footer.jsx";

export default function home() {
  return (
    <div>
      <TopNavBar />
      <ListingHeader />
      <ListingDetails />
      <ListingLocation />
      <Footer />
    </div>
  );
}
