import React from "react";
import BackgroundPhoto from "../images/MainServicesAucklandCitySunset.png";
import Invest from "../images/houseWithKeys.png";
import Rent from "../images/rentIcon.png";
import Manage from "../images/managementIcon.png";
import Appraisal from "../images/appraisalIcon.png";
import { Link } from "react-router-dom";

export default function HomeMainServices() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px]">
        {/* BACKGROUND IMAGE */}
        <div className="bg-center bg-cover h-[550px] flex items-start justify-start p-10" style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
          <div className="text-left">
            <div className="text-black text-6xl font-normal">Auckland's</div>
            <div className="text-black text-5xl font-normal">most trusted</div>
            <div className="text-black text-7xl font-bold">Property Experts</div>
          </div>
        </div>

        {/* MAIN SERVICES CARDS */}
        <div className="Services flex justify-center bg-gradient-to-t from-footergradwhite to-footergradmidgrey">
          <div
            className="flex flex-col items-center justify-center w-[260px] h-[250px] border bg-white border-black rounded-xl pt-2 pr-2 pb-2 pl-2 mt-14 mb-12 ml-4 mr-4"
            style={{
              boxShadow: "0 5px 8px #c2c0c0",
              borderColor: "#808080",
            }}
          >
            <img className="w-32 h-32" src={Invest} alt="Rent" />
            <p className="font-medium text-2xl">Invest with Us</p>
          </div>

          <div
            className="flex flex-col items-center justify-center w-[260px] h-[250px] border bg-white border-black rounded-xl pt-2 pr-2 pb-2 pl-2 mt-14 mb-12 ml-4 mr-4"
            style={{
              boxShadow: "0 5px 8px #c2c0c0",
              borderColor: "#808080",
            }}
          >
            <Link to="properties-for-rent" className="flex flex-col items-center">
              <img className="w-32 h-32" src={Rent} alt="Rent" />
              <p className="font-medium text-2xl">Properties for Rent</p>
            </Link>
          </div>

          <div
            className="flex flex-col items-center justify-center w-[260px] h-[250px] border bg-white border-black rounded-xl pt-2 pr-2 pb-2 pl-2 mt-14 mb-12 ml-4 mr-4"
            style={{
              boxShadow: "0 5px 8px #c2c0c0",
              borderColor: "#808080",
            }}
          >
            <img className="w-32 h-32" src={Manage} alt="Property Management" />
            <p className="font-medium text-2xl">Property Management</p>
          </div>

          <div
            className="flex flex-col items-center justify-center w-[260px] h-[250px] border bg-white border-black rounded-xl pt-2 pr-2 pb-2 pl-2 mt-14 mb-12 ml-4 mr-4"
            style={{
              boxShadow: "0 5px 8px #c2c0c0",
              borderColor: "#808080",
            }}
          >
            <img className="w-32 h-32" src={Appraisal} alt="Property Appraisal" />
            <p className="font-medium text-2xl">Property Appraisal</p>
          </div>
        </div>

        {/* INSPIRATIONAL QUOTE */}
        <div
          className="Quote border-t border-b border-black flex flex-col items-center justify-center py-6"
          style={{
            boxShadow: "0 5px 8px #c2c0c0",
            borderColor: "#808080",
          }}
        >
          <div className="text-black text-5xl font-bold">Working with you, for you. </div>
          <div className="text-black text-4xl font-normal text-center leading-relaxed">We offer tailored services</div>
        </div>
      </div>
    </div>
  );
}
