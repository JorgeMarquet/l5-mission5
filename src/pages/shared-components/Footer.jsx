import React from "react";
import FooterLeft from "./FooterLeft.jsx";
import FooterRight from "./FooterRight.jsx";

export default function Footer() {
  return (
    <footer className="w-screen h-footerlg bg-gradient-to-b from-white via-midgrey to-grey">
      <div className="text-center sm:flex sm:text-left">
        <div className="h-footerlg sm:basis-1/2">
          <FooterLeft />
        </div>
        <div className="h-footerlg bg-green sm:basis-1/2">
          <FooterRight />
        </div>
      </div>
    </footer>
  );
}
