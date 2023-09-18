import React from "react";
import Bubble from "../images/bubble.png";
import Stars from "../images/stars.png";

export default function ReviewCard({ review }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative top-28 flex items-center">
        <div className="flex flex-col items-center">
          <p className="font-semibold">{review.comment}</p>
          <img src={Stars} alt="" />
        </div>
      </div>
      <div className="mt-1">
        <img className="" src={Bubble} alt="" />
      </div>
      <div className="flex items-center mr-12">
        <div>
          <img className="w-28" src={review.image} alt="" />
        </div>
        <div className="ml-4">
          <h1 className="font-normal text-sm">{review.name}</h1>
          <h2 className="text-xs font-light">{review.date}</h2>
        </div>
      </div>
    </div>
  );
}
