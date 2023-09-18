import React from "react";
import ReviewCard from "../../data/ReviewCard";
import reviewData from "../../data/ReviewData";

export default function Slide1() {
  const array1Data = reviewData.find((item) => item.title === "Array 1").data;

  return (
    <div className="relative w-[1440px]">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 w-[750px]">
          {array1Data.map((item) => (
            <div key={item.id} className="-mt-16">
              <ReviewCard review={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
