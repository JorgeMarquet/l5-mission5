import React from "react";
import TopNavBar from "./shared-components/TopNavBar";
import TenancyInformationContent from "./TenancyInformationContent.jsx";
import TenancyCarousel from "./TenancyCarousel";
import Footer from "./shared-components/Footer";

export default function TenancyInformation() {
  return (
    <div>
      <div>
        <TopNavBar />
        <TenancyInformationContent />
        <TenancyCarousel />
        <Footer />
      </div>
    </div>
  );
}
