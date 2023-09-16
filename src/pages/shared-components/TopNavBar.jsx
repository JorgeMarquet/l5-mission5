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
            <div className="relative flex-grow bg-brightGreen" style={{ marginLeft: '50px', marginRight: '140px' }}>
                <ul className="flex justify-between font-bold text-footertextnavyblue text-xl mb-6">
                    <li className="cursor-pointer">Home</li>

                    {/* List below includes state hook to visualise suboptions menu accordingly */}

                    {/*INVEST*/}
                    <li className="cursor-pointer flex items-center">
                        {/* Toggle the dropdown based on its name */}
                        <span onClick={() => setShowDropdown(showDropdown !== 'Invest' ? 'Invest' : null)}>Invest</span>
                        <img onClick={() => setShowDropdown(showDropdown !== 'Invest' ? 'Invest' : null)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        
                        {/* Check if the dropdown name matches the current state */}
                        <div 
                            style={{ display: showDropdown === 'Invest' ? 'block' : 'none' }}
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
                      {/* Toggle the dropdown based on its name */}
                      <span onClick={() => setShowDropdown(showDropdown !== 'Manage' ? 'Manage' : null)}>Manage</span>
                        <img onClick={() => setShowDropdown(showDropdown !== 'Manage' ? 'Manage' : null)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        
                        {/* Check if the dropdown name matches the current state */}
                        <div 
                            style={{ display: showDropdown === 'Manage' ? 'block' : 'none' }}
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
                         {/* Toggle the dropdown based on its name */}
                        <span onClick={() => setShowDropdown(showDropdown !== 'Rent' ? 'Rent' : null)}>Rent</span>
                        <img onClick={() => setShowDropdown(showDropdown !== 'Rent' ? 'Rent' : null)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        
                        {/* Check if the dropdown name matches the current state */}
                        <div 
                            style={{ display: showDropdown === 'Rent' ? 'block' : 'none' }}
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
                        {/* Toggle the dropdown based on its name */}
                        <span onClick={() => setShowDropdown(showDropdown !== 'Other Services' ? 'Other Services' : null)}>Other Services</span>
                        <img onClick={() => setShowDropdown(showDropdown !== 'Other Services' ? 'Other Services' : null)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        
                        {/* Check if the dropdown name matches the Other Services state */}
                        <div 
                            style={{ display: showDropdown === 'Other Services' ? 'block' : 'none' }}
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
                         {/* Toggle the dropdown based on its name */}
                        <span onClick={() => setShowDropdown(showDropdown !== 'About Us' ? 'About Us' : null)}>About Us</span>
                        <img onClick={() => setShowDropdown(showDropdown !== 'About Us' ? 'About Us' : null)} src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        
                        {/* Check if the dropdown name matches the About Us state */}
                        <div 
                            style={{ display: showDropdown === 'About Us' ? 'block' : 'none' }}
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
