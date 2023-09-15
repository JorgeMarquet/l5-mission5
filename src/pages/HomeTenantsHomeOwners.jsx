import React from "react";
import Tenants from "../images/tentants.png";
import HomeOwners from "../images/homeowners.png";

export default function HomeTenantsHomeOwners() {
  return (
    <div>
      <div className="flex font-display">
        <div className=" ">
          <img className="object-contain w-[720px]" src={Tenants} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 bg-gradient-to-t from-footergradwhite to-footergradmidgrey">
          <h1 className="font-bold text-6xl">TENANTS</h1>
          <h1 className="mt-4 font-bold text-4xl">In need of extra room?</h1>
          <h1 className="mt-12 font-medium text-4xl">We can help!</h1>
          <h1 className="font-regular text-4xl">
            <span className="underline">Contact us</span> for more information
          </h1>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-footergradwhite to-footergradmidgrey">
          <h1 className="font-bold text-6xl">HOME OWNERS</h1>
          <h1 className="mt-4 font-bold text-4xl">Looking to invest?</h1>
          <h1 className="mt-12 font-medium text-4xl">Leave it to us!</h1>
          <h1 className="font-regular text-4xl">
            <span className="underline">Contact us</span> for more information
          </h1>
        </div>
        <div className="">
          <img className="object-contain w-[720px]" src={HomeOwners} alt="" />
        </div>
      </div>
    </div>
  );
}
