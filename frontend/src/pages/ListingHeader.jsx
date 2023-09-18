import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ListingHeader() {
  return (
    <div className="flex flex-col items-left min-w-fit w-[1440px]">
      <div className="flex flex-col ml-24">
        <div className="flex items-center">
          <FontAwesomeIcon className="mr-4 my-10 w-4 h-5" icon={faArrowLeft} />
          <h1 className="font-medium text-lg">Return to Search Results</h1>
        </div>
        <h1 className="font-semibold text-5xl">2 Happy Clouds Road, Best Suburb ever</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[1345px] h-[630px] grid grid-cols-4 grid-rows-2 gap-4 mt-4">
          <div className="col-span-2 row-span-2 bg-gray-300" style={{ borderBottomLeftRadius: "60px", borderTopLeftRadius: "60px" }}>
            Left 2x2 Box
          </div>
          <div className="bg-gray-300">Right Top 1x1 Box 1</div>
          <div className="bg-gray-300" style={{ borderTopRightRadius: "30px" }}>
            Right Top 1x1 Box 2
          </div>
          <div className="bg-gray-300">Right Bottom 1x1 Box 1</div>
          <div className="bg-gray-300" style={{ borderBottomRightRadius: "30px" }}>
            Right Bottom 1x1 Box 2
          </div>
        </div>
      </div>
    </div>
  );
}
