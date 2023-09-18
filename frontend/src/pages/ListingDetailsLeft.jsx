import React from "react";
import bed from "../images/bed.png";
import shower from "../images/shower.png";
import garage from "../images/garage.png";
import longterm from "../images/longterm.png";
import bond from "../images/bond.png";
import smoking from "../images/smoking.png";

export default function ListingDetailsLeft() {
  return (
    <div className="flex flex-col items-left text-left">
      <div className="ml-20">
        <h1 className="mt-10 mb-8 font-bold text-5xl">$200/wk</h1>
        <div className="flex mb-10">
          <h1 className="flex items-center mr-4 px-4 py-2 font-bold text-sm border border-black rounded-3xl">
            <img className="w-4 h-4 mr-2" src={bed} alt="" /> 2 bedrooms
          </h1>
          <h1 className="flex items-center mr-4 px-4 py-2 font-bold text-sm border border-black rounded-3xl">
            <img className="w-4 h-4 mr-2" src={shower} alt="" /> 2 bathrooms
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-3 font-semibold text-4xl">About this property</h1>
          <p className="mb-12 pr-44 font-light">
            Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Working it up and down, back and forth. Without washing the brush, I'm gonna go right into some Van Dyke Brown, some Burnt Umber, and a little bit
            of Sap Green. Here we're limited by the time we have.There comes a nice little fluffer. Everybody's different. Trees are different. Let them all be individuals. This is an example of what you can do with just a few things, a little
            imagination and a happy dream in your heart. Just think about these things in your mind - then bring them into your world.
          </p>
        </div>
        <div className="h-[400px] mr-10 border-t-2 border-b-2 border-black">
          <div className="flex flex-col">
            <h1 className="mt-8 mb-8 font-semibold text-4xl">Shared amenities & furnishings</h1>
          </div>
          <h1 className="flex items-center font-light">
            <img className="mb-6 w-8 h-8 mr-2" src={garage} alt="" /> Off-street parking
          </h1>
          <h1 className="flex items-center font-light">
            <img className="mb-6 w-8 h-8 mr-2" src={longterm} alt="" /> Long term tenancy only
          </h1>
          <h1 className="flex items-center font-light">
            <img className="mb-6 w-8 h-8 mr-2" src={bond} alt="" /> 3 weeks bond
          </h1>
          <h1 className="flex items-center font-light">
            <img className="w-8 h-8 mr-2" src={smoking} alt="" /> No smoking
          </h1>
        </div>
      </div>
    </div>
  );
}
