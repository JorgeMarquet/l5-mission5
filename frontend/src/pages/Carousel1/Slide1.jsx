import React from "react";
import Carousel1a from "../../images/Carousel1a.png";
import FindOutButton from "../shared-components/FindOutButton";

export default function Slide1() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="flex w-[1440px]">
        <div className="flex flex-col justify-center items-center w-1/3 h-[470px]">
          <h1 className="font-bold text-5xl">Healthy</h1>
          <h1 className="font-bold mt-2 text-5xl">Homes</h1>
          <h1 className="font-bold mt-2 mb-4 text-5xl">Standards</h1>
          <FindOutButton />
        </div>
        <div className="w-2/3 object-cover">
          <img src={Carousel1a} alt="" />
        </div>
      </div>
    </div>
  );
}
