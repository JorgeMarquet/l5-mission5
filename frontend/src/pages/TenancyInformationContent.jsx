import React from "react";
import BackgroundPhoto from "../images/tenancyInformationBackground.png";
import relationships from "../images/relationships.png";
import ongoing from "../images/ongoing.png";
import finding from "../images/finding.png";

export default function TenancyInformationContent() {
  return (
    <div className="flex flex-col items-center min-w-fit font-display">
      {/* BACKGROUND PHOTO */}
      <div className="w-[1440px] bg-center bg-cover h-[540px] flex items-center justify-start p-10" style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
        <div className="flex flex-col items-start ml-2">
          <div className="text-left">
            <div className="text-white text-6xl font-semibold">Finding</div>
            <div className="text-white text-6xl font-semibold mb-3">the property</div>
            <div className="text-white text-6xl font-semibold mb-6">that's right for YOU</div>
          </div>
          <button
            className="w-[440px] h-[50px] bg-themered rounded-2xl text-white text-xl font-bold active:bg-violet-700"
            style={{
              boxShadow: "0 3px 8px #595959",
              borderColor: "#808080",
            }}
          >
            View our property listings
          </button>
        </div>
      </div>

      {/* CONTACT PROPERTY MANAGER SECTION */}
      <div className="w-[1440px] h-[430px]  flex">
        {/* Left section (Green div) */}
        <div className=" flex flex-col justify-center p-10 flex-shrink-0">
          <div className="text-black text-5xl font-bold mb-3">Happy Tenants</div>
          <div className="text-black text-4xl font-semibold mb-4">Our Commitment.</div>
          <div className="text-black text-lg font-light">Even the worst thing we can do here is good.</div>
          <div className="text-black text-lg font-light mb-8">Happy painting, God bless.</div>
          <button
            className="w-[440px] h-[50px] bg-themered rounded-2xl text-white text-xl font-bold active:bg-violet-700"
            style={{
              boxShadow: "0 3px 8px #595959",
              borderColor: "#808080",
            }}
          >
            Contact a property manager
          </button>
        </div>

        {/* Right section (Violet div) */}
        <div className=" flex items-center justify-start flex-grow">
          <ul className="flex flex-row text-black">
            {/* Updated styles here */}
            <li className="-mt-10 ml-10">
              <img src={finding} alt="" />
              <h1 className="font-medium text-lg">Finding a Home</h1>
            </li>
            <li className="-mt-8 ml-28">
              <img src={ongoing} alt="" />
              <h1 className="font-medium text-lg">Ongoing Support</h1>
            </li>
            <li className="mt-1 ml-24">
              <img className="-mt-4" src={relationships} alt="" />
              <h1 className="font-medium mt-4 text-lg">Lasting Relationships</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
