import React from "react";
import ListingDetailsLeft from "./ListingDetailsLeft.jsx";
import ListingDetailsRight from "./ListingDetailsRight.jsx";

export default function Footer() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="flex text-left">
        <div className="basis-1/2">
          <ListingDetailsLeft />
        </div>
        <div className="basis-1/2">
          <ListingDetailsRight />
        </div>
      </div>
    </div>
  );
}
