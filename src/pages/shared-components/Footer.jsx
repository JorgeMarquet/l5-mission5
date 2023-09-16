import React from "react";
import FooterLeft from "./FooterLeft.jsx";
import FooterRight from "./FooterRight.jsx";

export default function Footer() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <footer className="w-[1440px] h-footerlg bg-gradient-to-b from-footergradwhite to-footergradmidgrey">
        <div className="text-center sm:flex sm:text-left">
          <div className="h-footerlg sm:basis-1/2">
            <FooterLeft />
          </div>
          <div className="h-footerlg sm:basis-1/2">
            <FooterRight />
          </div>
        </div>
      </footer>
    </div>
  );
}
