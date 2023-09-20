import React from "react";

export default function ListingLocation({ listingData }) {
  if (!listingData) {
    // If listingData is not available yet, you can return null or a loading message
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center min-w-fit mb-40">
      <div className="w-[1440px]">
        <div className="ml-24">
          <h1 className="mt-8 mb-8 font-semibold text-4xl">Location</h1>
        </div>
        <div className="flex justify-center mt-14">
          <iframe src={listingData.googlemap} title="map" width="1300" height="600" className="border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}
