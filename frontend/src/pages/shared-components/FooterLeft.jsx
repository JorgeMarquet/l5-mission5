import React from "react";
import { ReactComponent as Logo } from "../../images/metroLogo.svg";
import { Link } from "react-router-dom";

export default function FooterLeft() {
  return (
    <div className="flex font-display flex-col pl-32 pr-24">
      <div className="flex justify-start">
        <Logo className="object-cover w-[333px] h-[92px] sm:w-logo sm:h-logo" />
      </div>
      <div className="flex justify-between pt-10">
        <ul className="text-left">
          <li className="font-semibold text-footertextnavyblue text-lg mb-6">Article</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">New Article</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">Popular Article</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">Most Read</li>
        </ul>
        <ul className="text-left">
          <li className="font-semibold text-footertextnavyblue text-lg mb-6">Service</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">House</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">Apartment</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">
            <Link to="/properties-for-rent">Rental</Link>
          </li>
        </ul>
        <ul className="text-left">
          <li className="font-semibold text-footertextnavyblue text-lg mb-6">About Us</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">Our Team</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">Career</li>
          <li className="font-normal text-footertextgrey text-sm text-lg mb-3">Gallery</li>
        </ul>
      </div>
    </div>
  );
}
