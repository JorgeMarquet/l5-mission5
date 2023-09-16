import React from "react";
import BackgroundPhoto from "../images/MainServicesAucklandCitySunset.png";
import Invest from "../images/houseWithKeys.png";
import Rent from "../images/rentIcon.png";
import Manage from "../images/managementIcon.png";
import Appraisal from "../images/appraisalIcon.png";

export default function HomeMainServices() {
  return (
    <div>
      {/* BACKGROUND IMAGE */}
      <div className="bg-center bg-cover h-[650px] flex items-start justify-start p-10" style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
        <div className="text-left">
          <div className="text-black text-7xl">Auckland's</div>
          <div className="text-black text-5xl font-semibold">most trusted</div>
          <div className="text-black text-7xl font-bold">Property Experts</div>
        </div>
      </div>

      {/* MAIN SERVICES CARDS */}
      <div className="Services flex justify-center Container bg-gradient-to-b from -d9d7d7 to-white">
        <div className="Service Card flex flex-col items-center border border-gray-300 rounded-lg p-16 mt-4 mb-5 ml-3 mr-3">
          <img className="w-32 h-32" src={Invest} alt="Invest" />
          <p>Invest with Us</p>
        </div>

        <div className="Service Card flex flex-col items-center border border-gray-300 rounded-lg p-16 mt-4 mb-5 ml-3 mr-3">
          <img className="w-32 h-32" src={Rent} alt="Rent" />
          <p>Properties for Rent</p>
        </div>
        <div className="Service Card flex flex-col items-center border border-gray-300 rounded-lg p-16 mt-4 mb-5 ml-3 mr-3">
          <img className="w-32 h-32" src={Manage} alt="Property Management" />
          <p>Property Management</p>
        </div>
        <div className="Service Card flex flex-col items-center border border-gray-300 rounded-lg p-16 mt-4 mb-5 ml-3 mr-3">
          <img className="w-32 h-32" src={Appraisal} alt="Property Appraisal" />
          <p>Property Appraisal</p>
        </div>
      </div>

      {/* INSPIRATIONAL QUOTE */}
      <div className="Quote border-t border-b border-black flex flex-col items-center justify-center py-10">
        <div className="text-black text-6xl font-bold">Working with you, for you. </div>
        <div className="text-black text-5xl font-semibold text-center leading-relaxed">We offer tailored services</div>
      </div>
    </div>
  );
}
