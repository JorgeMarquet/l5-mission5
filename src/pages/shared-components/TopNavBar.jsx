import React from 'react'
import { ReactComponent as Logo } from "../../images/metroLogo.svg";
import displayListIcon from '../../images/displayListIcon.png';


export default function TopNavBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 ">
        <div>
            <Logo width={497} height={148} />
        </div>
        <div className="flex-grow bg-brightGreen" style={{ marginLeft: '90px', marginRight: '190px' }}>
            <ul className="flex justify-between font-bold text-footertextnavyblue text-lg mb-6"> {/* Changed space-x-6 to justify-between */}
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer flex items-center">Invest <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]"/></li>
                <li className="cursor-pointer flex items-center">Manage <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]"/></li>
                <li className="cursor-pointer flex items-center">Rent <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]"/></li>
                <li className="cursor-pointer flex items-center">Other Services <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]"/></li>
                <li className="cursor-pointer flex items-center">About us <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]"/></li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </div>
    </div>
  )
}
