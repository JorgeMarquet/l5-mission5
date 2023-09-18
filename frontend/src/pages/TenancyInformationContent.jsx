import React from 'react';
import BackgroundPhoto from '../images/tenancyInformationBackground.png';
import MagnifyingGlassIcon from '../images/magnifyingGlass.png'
import RecycleBubble from '../images/recycleBubble.png'
import ShakingHands from '../images/shakingHands.png'

export default function TenancyInformationContent() {
  return (
    <div className="flex flex-col items-center  ">

      {/* BACKGROUND PHOTO */}
      <div className="w-[1440px] bg-center bg-cover h-[650px] flex items-center justify-start p-10 border-b border-black" style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
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
          <div className="text-black text-6xl font-bold mb-4">Happy Tenants</div>
          <div className="text-black text-5xl font-semibold mb-6">Our Commitment.</div>
          <div className="text-black text-xl font-[400] mb-10">
          Even the worst thing we can do here is good.<br />
          Happy painting, God bless.
          </div>

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
        <div className="flex items-center justify-center flex-grow">
            <ul className="flex flex-row space-x-24 text-black">
                <li className="flex flex-col items-center space-y-2 h-full">
                    <img src={MagnifyingGlassIcon} alt="Magnifying Glass" className="h-40 w-auto mb-2" />
                    <span className="flex-grow flex items-end text-xl font-semibold">Finding a home</span>
                </li>

                <li className="flex flex-col items-center space-y-2 h-full">
                    <img src={RecycleBubble} alt="Recycle Bubble" className="h-40 w-auto mb-2" />
                    <span className="flex-grow flex items-end text-xl font-semibold">Ongoing Support</span>
                </li>

                <li className="flex flex-col items-center space-y-2 h-full mt-auto">
                    <img src={ShakingHands} alt="Shaking Hands" className="h-30 w-auto mb-12" />
                    <span className="flex-grow flex items-end text-xl font-semibold">Lasting Relationships</span>
                </li>
            </ul>
        </div>



      </div>
    </div>
  );
}
