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
                    <li className="cursor-pointer flex items-center">
                        <span onClick={() => setShowDropdown(!showDropdown)}>Invest</span>
                        <img src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]" />
                        <div 
                            style={{ display: showDropdown ? 'block' : 'none' }}
                            className="absolute top-full mt-1 left-130 w-48 bg-white border rounded shadow-lg"
                        >
                            <ul>
                                <li className="p-2 hover:bg-gray-200">Investment Properties</li>
                                <li className="p-2 hover:bg-gray-200">Tenanted Property Sales</li>
                            </ul>
                        </div>
                    </li>
                    <li className="cursor-pointer flex items-center">Manage <img src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]"/></li>
                    <li className="cursor-pointer flex items-center">Rent <img src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]"/></li>
                    <li className="cursor-pointer flex items-center">Other Services <img src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]"/></li>
                    <li className="cursor-pointer flex items-center">About us <img src={displayListIcon} alt="Icon" className="ml-2 h-[12px] w-[15px]"/></li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    )
}
