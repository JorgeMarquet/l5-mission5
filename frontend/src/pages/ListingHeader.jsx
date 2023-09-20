import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ListingHeader({ listingData }) {
  if (!listingData) {
    return null;
  }

  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px]">
        <div className="flex flex-col ml-24">
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-4 my-10 w-4 h-5" icon={faArrowLeft} />
            <h1 className="font-medium text-lg">Return to Search Results</h1>
          </div>
          <h1 className="font-semibold text-5xl">
            {listingData.address}, {listingData.title}
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-[1350px] h-[680px] grid grid-cols-4 grid-rows-2 gap-6 mt-4" style={{ gridTemplateColumns: "150px 1fr 1fr 1fr" }}>
            <div className="col-span-2 row-span-2 bg-gray-300 overflow-hidden" style={{ borderBottomLeftRadius: "60px", borderTopLeftRadius: "60px" }}>
              <img className="object-cover h-full w-full" src={listingData.image1} alt="Large" />
            </div>
            <div className="bg-gray-300 overflow-hidden">
              <img className="object-cover h-full w-full" src={listingData.image2} alt="Top Left" />
            </div>
            <div className="bg-gray-300 overflow-hidden" style={{ borderTopRightRadius: "30px" }}>
              <img className="object-cover h-full w-full" src={listingData.image3} alt="Top Right" />
            </div>
            <div className="bg-gray-300 overflow-hidden">
              <img className="object-cover h-full w-full" src={listingData.image4} alt="Bottom Left" />
            </div>
            <div className="bg-gray-300 overflow-hidden" style={{ borderBottomRightRadius: "30px" }}>
              <img className="object-cover h-full w-full" src={listingData.image5} alt="Bottom Right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
