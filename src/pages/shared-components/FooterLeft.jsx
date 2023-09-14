import React from "react";

export default function FooterLeft() {
  return (
    <div className="flex flex-col pt-7 sm:flex-col sm:pl-32 sm:pr-24">
      <div className="flex justify-center sm:justify-start">
        <img className="object-cover w-slogo h-slogo sm:w-logo sm:h-logo" src="http://via.placeholder.com/640x360" alt="placeholder" />
      </div>
      <div className="flex justify-evenly pt-7 mx-0 sm:justify-between sm:pt-12 sm:mx-0">
        <ul className="text-left">
          <li className="font-semibold text-footertextnavyblue text-lg mb-6">Article</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">New Article</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">Popular Article</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">Most Read</li>
        </ul>
        <ul className="text-left">
          <li className="font-semibold text-footertextnavyblue text-lg mb-6">Service</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">House</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">Apartment</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">Rental</li>
        </ul>
        <ul className="text-left">
          <li className="font-semibold text-footertextnavyblue text-lg mb-6">About Us</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">Our Team</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">Career</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-4">Gallery</li>
        </ul>
      </div>
    </div>
  );
}
