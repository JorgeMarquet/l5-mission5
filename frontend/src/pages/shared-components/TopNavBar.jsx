import React, { useState } from "react";
import { ReactComponent as Logo } from "../../images/metroLogo.svg";
import displayListIcon from "../../images/displayListIcon.png";
import  { Link } from "react-router-dom"

export default function TopNavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px] flex justify-between items-center px-4 ">
        <div>
          <Logo className="object-fill w-[450px]" />
        </div>
        <div className="relative flex-grow bg-brightGreen" style={{ marginLeft: "40px", marginRight: "50px" }}>
          <ul className="flex justify-between font-bold text-footertextnavyblue text-lg mb-6">
            <li className="font-regular text-sm mt-16 cursor-pointer">Home</li>

            {/* List below includes state hook to visualise suboptions menu accordingly */}

            {/*INVEST*/}
            <li className="cursor-pointer flex items-center">
              {/* Toggle the dropdown based on its name */}
              <span className="font-regular text-sm mt-16 cursor-pointer" onClick={() => setShowDropdown(showDropdown !== "Invest" ? "Invest" : null)}>
                Invest
              </span>
              <img onClick={() => setShowDropdown(showDropdown !== "Invest" ? "Invest" : null)} src={displayListIcon} alt="Icon" className="mt-16 ml-2 h-[9px] w-[12px]" />

              {/* Check if the dropdown name matches the current state */}
              <div style={{ display: showDropdown === "Invest" ? "block" : "none" }} className="absolute top-full mt-1 left-130 w-48 bg-white border rounded-xl shadow-lg text-base font-semibold">
                <ul>
                  <li className="text-xs p-2 hover:bg-gray-200">Investment Properties</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Tenanted Property Sales</li>
                </ul>
              </div>
            </li>

            {/*MANAGE*/}
            <li className="cursor-pointer flex items-center">
              {/* Toggle the dropdown based on its name */}
              <span className="font-regular text-sm mt-16 cursor-pointer" onClick={() => setShowDropdown(showDropdown !== "Manage" ? "Manage" : null)}>
                Manage
              </span>
              <img onClick={() => setShowDropdown(showDropdown !== "Manage" ? "Manage" : null)} src={displayListIcon} alt="Icon" className="mt-16 ml-2 h-[9px] w-[12px]" />

              {/* Check if the dropdown name matches the current state */}
              <div style={{ display: showDropdown === "Manage" ? "block" : "none" }} className="absolute top-full mt-1 left-130 w-52 bg-white border rounded-xl shadow-lg text-base font-semibold">
                <ul>
                  <li className="text-xs p-2 hover:bg-gray-200">Property Management</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Building Management</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Rental Management</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Body Corporate Administration</li>
                </ul>
              </div>
            </li>

            {/*RENT*/}
            <li className="cursor-pointer flex items-center">
              {/* Toggle the dropdown based on its name */}
              <span className="font-regular text-sm mt-16 cursor-pointer" onClick={() => setShowDropdown(showDropdown !== "Rent" ? "Rent" : null)}>
                Rent
              </span>
              <img onClick={() => setShowDropdown(showDropdown !== "Rent" ? "Rent" : null)} src={displayListIcon} alt="Icon" className="mt-16 ml-2 h-[9px] w-[12px]" />

              {/* Check if the dropdown name matches the current state */}
              <div style={{ display: showDropdown === "Rent" ? "block" : "none" }} className="absolute top-full mt-1 left-130 w-48 bg-white border rounded-xl shadow-lg text-base font-semibold">
                <ul>
                  <li className="text-xs p-2 hover:bg-gray-200">Tenancy Information</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Properties for rent</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Tenancy Application</li>
                </ul>
              </div>
            </li>

            {/*OTHER SERVICES*/}
            <li className="cursor-pointer flex items-center">
              {/* Toggle the dropdown based on its name */}
              <span className="font-regular text-sm mt-16 cursor-pointer" onClick={() => setShowDropdown(showDropdown !== "Other Services" ? "Other Services" : null)}>
                Other Services
              </span>
              <img onClick={() => setShowDropdown(showDropdown !== "Other Services" ? "Other Services" : null)} src={displayListIcon} alt="Icon" className="mt-16 ml-2 h-[9px] w-[12px]" />

              {/* Check if the dropdown name matches the Other Services state */}
              <div style={{ display: showDropdown === "Other Services" ? "block" : "none" }} className="absolute top-full mt-1 left-130 w-56 bg-white border rounded-xl shadow-lg text-base font-semibold">
                <ul>
                  <li className="text-xs p-2 hover:bg-gray-200">Healthy Homes Standards</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Decluttering Services</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Renovation Project Management</li>
                </ul>
              </div>
            </li>

            {/*ABOUT US*/}
            <li className="cursor-pointer flex items-center">
              {/* Toggle the dropdown based on its name */}
              <span className="font-regular text-sm mt-16 cursor-pointer" onClick={() => setShowDropdown(showDropdown !== "About Us" ? "About Us" : null)}>
                About Us
              </span>
              <img onClick={() => setShowDropdown(showDropdown !== "About Us" ? "About Us" : null)} src={displayListIcon} alt="Icon" className="mt-16 ml-2 h-[9px] w-[12px]" />

              {/* Check if the dropdown name matches the About Us state */}
              <div style={{ display: showDropdown === "About Us" ? "block" : "none" }} className="absolute top-full mt-1 left-130 w-48 bg-white border rounded-xl shadow-lg text-base font-semibold">
                <ul>
                  <li className="text-xs p-2 hover:bg-gray-200">Our Management Team</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Gallery</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Work with us</li>
                  <li className="text-xs p-2 hover:bg-gray-200">Dispute Process</li>
                </ul>
              </div>
            </li>

            <li className="font-regular text-sm mt-16 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
