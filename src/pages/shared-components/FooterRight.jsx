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
    <div className="ml-36">
      <div className="">
        <h1 className="mt-28 font-semibold text-footertextnavyblue text-lg">Contact</h1>
        <div className="flex mt-9">
          <FontAwesomeIcon className="w-6 h-7" icon={faLocationDot} />
          <h1>Level 33, ANZ Centre, 23-29 Albert St, Auckland, New Zealand</h1>
        </div>
        <div>
          <FontAwesomeIcon className="w-6 h-7" icon={faPhone} />
          <h1>(09) 391-4642</h1>
        </div>
        <div>
          <FontAwesomeIcon className="w-6 h-7" icon={faPrint} />
          <h1>info@metronz.co.nz</h1>
        </div>
      </div>
      <div className="">
        <h1 className="mt-16 mb-4 font-semibold text-footertextnavyblue text-lg">Social Media</h1>
        <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faSquareFacebook} />
        <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faInstagram} />
        <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faTwitter} />
        <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faLinkedinIn} />
        <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faYoutube} />
        <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faGooglePlusG} />
        <FontAwesomeIcon className="w-6 h-7 mr-7" icon={faPinterest} />
      </div>
      <h1 className="text-sm">Copyright &copy; 2023 Minimumlivingcost. All rights reserved.</h1>
    </div>
  );
}
