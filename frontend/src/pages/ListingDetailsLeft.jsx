import React from "react";
import bed from "../images/bed.png";
import shower from "../images/shower.png";
import garage from "../images/garage.png";
import longterm from "../images/longterm.png";
import bond from "../images/bond.png";
import smoking from "../images/smoking.png";
import nosmoking from "../images/nosmoking.png";

export default function ListingDetailsLeft({ listingData }) {
  return (
    <div className="flex flex-col items-left text-left">
      <div className="ml-20">
        <h1 className="mt-10 mb-8 font-bold text-5xl">${listingData.price}/wk</h1>
        <div className="flex mb-10">
          <h1 className="flex items-center mr-4 px-4 py-2 font-bold text-sm border border-black rounded-3xl">
            <img className="w-4 h-4 mr-2" src={bed} alt="" /> {listingData.bedrooms === 1 ? "1 bedroom" : `${listingData.bedrooms} bedrooms`}
          </h1>
          <h1 className="flex items-center mr-4 px-4 py-2 font-bold text-sm border border-black rounded-3xl">
            <img className="w-4 h-4 mr-2" src={shower} alt="" /> {listingData.bathrooms === 1 ? "1 bathroom" : `${listingData.bathrooms} bathrooms`}
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-3 font-semibold text-4xl">About this property</h1>
          <p className="mb-12 pr-44 font-light">{listingData.description}</p>
        </div>
        <div className="h-[400px] mr-10 border-t-2 border-b-2 border-black">
          <div className="flex flex-col">
            <h1 className="mt-8 mb-8 font-semibold text-4xl">Shared amenities & furnishings</h1>
          </div>
          <h1 className="flex items-center font-light text-lg">
            <img className="mb-6 w-10 h-10 mr-2" src={garage} alt="" /> <span className="font-semibold pb-12 -ml-2">{listingData.parking}</span>
            <span className="ml-2">Off-street parking</span>
          </h1>
          <h1 className="flex items-center font-light text-lg">
            <img className="mb-6 w-10 h-10 mr-2" src={longterm} alt="" />
            {listingData.tenancylength >= 12 ? (
              <>
                <span className="font-semibold -mt-14 -ml-4">{listingData.tenancylength}+</span>
                <span className="mb-3 -ml-1">Long term tenancy only</span>
              </>
            ) : (
              <span className="mb-3 ml-2">Short term tenancy available</span>
            )}
          </h1>
          <h1 className="flex items-center font-light text-lg">
            <img className="mb-6 w-12 h-12 mr-2 -ml-2" src={bond} alt="" /> <span className="-mt-6 ml-2">{listingData.bond} weeks bond</span>
          </h1>
          <h1 className="flex items-center font-light">
            {listingData.smoking ? (
              <>
                <img className="w-10 h-10 mr-2" src={smoking} alt="Smoking" />
                <span className="ml-2 text-lg">Smoking</span>
              </>
            ) : (
              <>
                <img className="w-10 h-10 mr-2" src={nosmoking} alt="No Smoking" />
                <span className="ml-2 text-lg">No smoking</span>
              </>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}
