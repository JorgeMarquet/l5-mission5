import React from 'react'
import BackgroundPhoto from '../images/tenancyInformationBackground.png'

export default function TenancyInformationContent() {
  return (
    <div>
        {/* BACKGROUND PHOTO */}
        <div className="bg-center bg-cover h-[650px] flex items-center justify-start p-10" style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
          <div className="flex flex-col items-start ml-16"> {/* Added flex container with vertical direction */}
            <div className="text-left mb-4"> {/* Added some margin bottom for spacing */}
              <div className="text-white text-7xl">Finding</div>
              <div className="text-white text-7xl font-semibold">the property</div>
              <div className="text-white text-7xl font-bold">that's right for YOU</div>
            </div>
            <button
            className="w-[488px] h-[58px] bg-themered rounded-2xl text-white text-xl font-bold  active:bg-violet-700"
            style={{
              boxShadow: "0 3px 8px #595959",
              borderColor: "#808080",
            }}
            >
            View our property listings
            </button>
          </div>
        </div>
    </div>
  )
}
