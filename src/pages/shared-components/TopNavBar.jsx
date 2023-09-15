import React from 'react'
import { ReactComponent as Logo } from "../../images/metroLogo.svg";

export default function TopNavBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 ">
        <div>
            <Logo width={497} height={148} />
        </div>
        <div className="flex-grow bg-brightGreen" style={{ marginLeft: '90px', marginRight: '190px' }}>
            <ul className="flex justify-between font-bold text-footertextnavyblue text-lg mb-6"> {/* Changed space-x-6 to justify-between */}
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Invest</li>
                <li className="cursor-pointer">Manage</li>
                <li className="cursor-pointer">Rent</li>
                <li className="cursor-pointer">Other Services</li>
                <li className="cursor-pointer">About us</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </div>
    </div>
  )
}
