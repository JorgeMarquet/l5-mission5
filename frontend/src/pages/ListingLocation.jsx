import React from "react";
import ListingMap from "./ListingMap";

export default function ListingLocation() {
  return (
    <div className="flex flex-col items-center min-w-fit mb-52">
      <div className="w-[1440px]">
        <div className="ml-24">
          <h1 className="mt-8 mb-8 font-semibold text-4xl">Location</h1>
        </div>
        <div>
          <ListingMap />
        </div>
      </div>
    </div>
  );
}
