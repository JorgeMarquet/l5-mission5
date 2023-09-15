import React from 'react'
import { ReactComponent as Logo } from "../../images/metroLogo.svg";

export default function TopNavBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2"> {/* Added flex for horizontal layout and some padding for spacing */}
        <div>
            {/* Placeholder for Metro NZ logo */}
            <Logo className="object-cover w-slogo h-slogo sm:w-logo sm:h-logo" />
        </div>
        <div>
            <ul className="flex space-x-6 font-semibold text-footertextnavyblue text-lg mb-6"> {/* Added flex for horizontal list items and space-x-6 for spacing between items */}
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
