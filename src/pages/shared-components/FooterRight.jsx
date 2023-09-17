import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

export default function FooterRight() {
  return (
    <div className="ml-36 font-display">
      <div className="">
        <h1 className="flex text-left mt-16 font-semibold text-footertextnavyblue text-base">Contact</h1>
        <div className="flex mt-3.5">
          <FontAwesomeIcon className="w-4 h-5" icon={faLocationDot} />
          <h1 className="flex font-normal items-center ml-4 text-footertextgrey text-xs">Level 33, ANZ Centre, 23-29 Albert St, Auckland, New Zealand</h1>
        </div>

        <div className="flex mt-6">
          <div className="flex">
            <FontAwesomeIcon className="w-6 h-7" icon={faPhone} />
            <h1 className="flex items-center ml-4 text-footertextgrey text-xs">(09) 391-4642</h1>
          </div>
          <div className="flex ml-36">
            <FontAwesomeIcon className="w-6 h-7" icon={faPrint} />
            <h1 className="flex items-center ml-4 text-footertextgrey text-xs">info@metronz.co.nz</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left">
        <h1 className="mt-10 mb-4 font-semibold text-footertextnavyblue text-base">Social Media</h1>
        <div>
          <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faSquareFacebook} />
          <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faTwitter} />
          <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faLinkedinIn} />
          <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faYoutube} />
          <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faInstagram} />
          <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faGooglePlusG} />
          <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faPinterest} />
        </div>
      </div>
      <h1 className="mt-12 ml-24 text-xs text-footertextgrey">Copyright &copy; 2023 Minimumlivingcost. All rights reserved.</h1>
    </div>
  );
}
