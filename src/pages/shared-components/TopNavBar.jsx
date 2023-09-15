import React, { useState } from 'react';
import { ReactComponent as Logo } from "../../images/metroLogo.svg";
import displayListIcon from '../../images/displayListIcon.png';

export default function TopNavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="flex justify-between items-center px-4 py-2 ">
            <div>
                <Logo width={497} height={148} />
            </div>
            <div className="relative flex-grow bg-brightGreen" style={{ marginLeft: '70px', marginRight: '190px' }}>
                <ul className="flex justify-between font-bold text-footertextnavyblue text-lg mb-6">
                    <li className="cursor-pointer">Home</li>

                    {/* List below includes state hook to visualise suboptions menu accordingly */}
                    {/*INVEST*/}
                    <li className="cursor-pointer flex items-center">
                        <span onClick={() => setShowDropdown(!showDropdown)}>Invest</span>
                        <img onClick={() => setShowDropdown(!showDropdown)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        <div 
                            style={{ display: showDropdown ? 'block' : 'none' }}
                            className="absolute top-full mt-1 left-130 w-48 bg-white border rounded-xl shadow-lg text-base font-semibold"
                        >
                            <ul>
                                <li className="p-2 hover:bg-gray-200">Investment Properties</li>
                                <li className="p-2 hover:bg-gray-200">Tenanted Property Sales</li>
                            </ul>
                        </div>
                    </li>
                    {/*MANAGE*/}
                    <li className="cursor-pointer flex items-center">
                        <span onClick={() => setShowDropdown(!showDropdown)}>Manage</span>
                        <img onClick={() => setShowDropdown(!showDropdown)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        <div 
                            style={{ display: showDropdown ? 'block' : 'none' }}
                            className="absolute top-full mt-1 left-130 w-48 bg-white border rounded-xl shadow-lg text-base font-semibold"
                        >
                            <ul>
                                <li className="p-2 hover:bg-gray-200">Property Management</li>
                                <li className="p-2 hover:bg-gray-200">Building Management</li>
                                <li className="p-2 hover:bg-gray-200">Rental Management</li>
                                <li className="p-2 hover:bg-gray-200">Body Corporate Administration</li>
                            </ul>
                        </div>
                    </li>

                    {/*RENT*/}
                    <li className="cursor-pointer flex items-center">
                        <span onClick={() => setShowDropdown(!showDropdown)}>Rent</span>
                        <img onClick={() => setShowDropdown(!showDropdown)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        <div 
                            style={{ display: showDropdown ? 'block' : 'none' }}
                            className="absolute top-full mt-1 left-130 w-48 bg-white border rounded-xl shadow-lg text-base font-semibold"
                        >
                            <ul>
                                <li className="p-2 hover:bg-gray-200">Tenancy</li>
                                <li className="p-2 hover:bg-gray-200">Properties for rent</li>
                                <li className="p-2 hover:bg-gray-200">Tenancy Application</li>
                            </ul>
                        </div>
                    </li>

                    {/*OTHER SERVICES*/}
                    <li className="cursor-pointer flex items-center">
                        <span onClick={() => setShowDropdown(!showDropdown)}>Other Services</span>
                        <img onClick={() => setShowDropdown(!showDropdown)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        <div 
                            style={{ display: showDropdown ? 'block' : 'none' }}
                            className="absolute top-full mt-1 left-130 w-48 bg-white border rounded-xl shadow-lg text-base font-semibold"
                        >
                            <ul>
                                <li className="p-2 hover:bg-gray-200">Healthy Homes Standards</li>
                                <li className="p-2 hover:bg-gray-200">Decluttering Services</li>
                                <li className="p-2 hover:bg-gray-200">Renovation Project Management</li>
                            </ul>
                        </div>
                    </li>

                    {/*ABOUT US*/}
                    <li className="cursor-pointer flex items-center">
                        <span onClick={() => setShowDropdown(!showDropdown)}>About us</span>
                        <img onClick={() => setShowDropdown(!showDropdown)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        <div 
                            style={{ display: showDropdown ? 'block' : 'none' }}
                            className="absolute top-full mt-1 left-130 w-48 bg-white border rounded-xl shadow-lg text-base font-semibold"
                        >
                            <ul>
                                <li className="p-2 hover:bg-gray-200">Our Management Team</li>
                                <li className="p-2 hover:bg-gray-200">Gallery</li>
                                <li className="p-2 hover:bg-gray-200">Work with us</li>
                                <li className="p-2 hover:bg-gray-200">Dispute Process</li>
                            </ul>
                        </div>
                    </li>

                    <li className="cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    )
}
