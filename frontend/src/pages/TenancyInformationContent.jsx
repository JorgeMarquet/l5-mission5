import React from 'react';
import BackgroundPhoto from '../images/tenancyInformationBackground.png';

export default function TenancyInformationContent() {
  return (
    <div className="flex flex-col items-center">

      {/* BACKGROUND PHOTO */}
      <div className="w-[1440px] bg-center bg-cover h-[650px] flex items-center justify-start p-10" style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
        <div className="flex flex-col items-start ml-16">
          <div className="text-left mb-4">
            <div className="text-white text-6xl">Finding</div>
            <div className="text-white text-6xl font-semibold">the property</div>
            <div className="text-white text-6xl font-bold">that's right for YOU</div>
          </div>
          <button
            className="w-[488px] h-[58px] bg-themered rounded-2xl text-white text-xl font-bold active:bg-violet-700"
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
      <div className="w-[1440px] h-[480px]  flex">

        {/* Left section (Green div) */}
        <div className=" flex flex-col justify-center p-10 flex-shrink-0">
          <div className="text-black text-6xl font-semibold mb-4">Happy Tenants</div>
          <div className="text-black text-5xl mb-4">Our Commitment.</div>
          <div className="text-black text-bs font-bold mb-4">Even the worst thing we can do here is good.</div>
          <div className="text-black text-bs font-bold mb-4">Happy painting, God bless.</div>
          <button
            className="w-[488px] h-[58px] bg-themered rounded-2xl text-white text-xl font-bold active:bg-violet-700"
            style={{
              boxShadow: "0 3px 8px #595959",
              borderColor: "#808080",
            }}
          >
            Contact a property manager
          </button>
        </div>

        {/* Right section (Violet div) */}
        <div className=" flex items-center justify-center flex-grow">
          <ul className="flex flex-row space-x-8 text-black"> {/* Updated styles here */}
            <li>Finding a home</li>
            <li>Ongoing Support</li>
            <li>Lasting Relationships</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
