import React from "react";
import ListingDetailsLeft from "./ListingDetailsLeft.jsx";
import ListingDetailsRight from "./ListingDetailsRight.jsx";

export default function ListingDetails({ listingData }) {
  if (!listingData) {
    return null;
  }

  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px]">
        <div className="flex text-left">
          <div className="basis-1/2">
            <ListingDetailsLeft listingData={listingData} />
          </div>
          <div className="basis-1/2">
            <ListingDetailsRight />
          </div>
        </div>
      </div>
    </div>
  );
}
