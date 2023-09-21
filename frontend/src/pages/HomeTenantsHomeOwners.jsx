import React from "react";
import Tenants from "../images/tenants.png";
import HomeOwners from "../images/homeowners.png";
import { Link } from "react-router-dom";

export default function HomeTenantsHomeOwners() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px]">
        <div className="flex font-display">
          <div className="z-30">
            <img
              className="object-cover overflow-hidden w-[720px] h-[445px]"
              style={{
                boxShadow: "0 5px 8px #c2c0c0",
                borderColor: "#808080",
              }}
              src={Tenants}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 bg-gradient-to-t from-footergradwhite to-footergradmidgrey">
            <h1 className="font-bold text-6xl">TENANTS</h1>
            <h1 className="mt-4 font-bold text-4xl">In need of extra room?</h1>
            <h1 className="mt-12 font-medium text-4xl">We can help!</h1>
            <h1 className="font-regular text-4xl">
              <Link to="/properties-for-rent" className="underline">
                Contact us
              </Link>{" "}
              for more information
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
            <img
              className="object-cover overflow-hidden w-[720px] h-[445px]"
              style={{
                boxShadow: "0 5px 8px #c2c0c0",
                borderColor: "#808080",
              }}
              src={HomeOwners}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
