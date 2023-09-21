import React from "react";
import FilterButton from "./shared-components/FilterButton";

export default function PropertiesListingsHeading() {
  return (
    <div>
      <div className=" p-4 mt-10 ml-28 flex">
        <div className="w-full">
          <div className="font-bold text-3xl text-f59e0b">___ Our Recommendation</div>
          <div className="flex justify-between">
            <div className="font-bold text-5xl mt-4 text-black">Featured House</div>{" "}
            <div className="flex items-right mr-28">
              <FilterButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
