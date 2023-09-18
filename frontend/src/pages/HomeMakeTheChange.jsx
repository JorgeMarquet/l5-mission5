import React from "react";
import Social from "../images/social.png";
import Awards from "../images/awards.png";
import Articles from "../images/articles.png";
import FindOutButton from "./shared-components/FindOutButton";

export default function HomeMakeTheChange() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px] h-[640px] bg-gradient-to-b from-makegradgrey to-white font-display">
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <img
              className=" mt-24 w-64 object-cover rounded-2xl"
              style={{
                boxShadow: "0 5px 8px #c2c0c0",
                borderColor: "#808080",
              }}
              src={Awards}
              alt=""
            />
            <h1 className="mt-5 text-4xl font-bold">Awards</h1>
          </div>
          <div className="flex flex-col items-center ml-24 mr-16 ">
            <img
              className="mt-24 w-64 object-cover rounded-2xl"
              style={{
                boxShadow: "0 5px 8px #c2c0c0",
                borderColor: "#808080",
              }}
              src={Articles}
              alt=""
            />
            <h1 className="mt-5 text-4xl font-bold">Articles</h1>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="mt-24 w-64 object-cover rounded-2xl"
              style={{
                boxShadow: "0 5px 8px #c2c0c0",
                borderColor: "#808080",
              }}
              src={Social}
              alt=""
            />
            <h1 className="mt-5 text-4xl font-bold">Social Responsibility</h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="mt-16 text-5xl font-bold">Make the Change</h1>
          <h1 className="mt-2 text-4xl font-normal">Switch to Metro NZ</h1>
          <FindOutButton />
        </div>
      </div>
    </div>
  );
}
