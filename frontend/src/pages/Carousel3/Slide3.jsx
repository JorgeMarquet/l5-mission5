import React from "react";
import Carousel3c from "../../images/Carousel3c.png";

export default function Slide1() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="flex w-[1440px]">
        <div className="flex flex-col justify-start items-left w-1/3 h-[470px]">
          <h1 className="flex items-center justify-center mt-2 ml-2 w-12 h-12 text-3xl text-[#4A5468] font-bold border border-black rounded-3xl">3</h1>
          <h1 className="font-bold text-2xl mt-10 ml-14">We'll do our homework</h1>
          <h1 className="w-[200px] font-regular text-xl mt-6 ml-14">We'll match the most suitable tenants to the property.</h1>
        </div>
        <div className="w-2/3 mr-20 object-cover">
          <img src={Carousel3c} alt="" />
        </div>
      </div>
    </div>
  );
}
