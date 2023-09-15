import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from "../../images/metroLogo.svg";
import displayListIcon from '../../images/displayListIcon.png';

export default function TopNavBar() {
  const [isInvestDropdownVisible, setInvestDropdownVisible] = useState(false);
  const investDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (investDropdownRef.current && !investDropdownRef.current.contains(event.target)) {
        setInvestDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center px-4 py-2 ">
        <div>
            <Logo width={497} height={148} />
        </div>
        <div className="flex-grow bg-brightGreen" style={{ marginLeft: '70px', marginRight: '190px' }}>
            <ul className="flex justify-between font-bold text-footertextnavyblue text-lg mb-6">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer flex items-center relative" ref={investDropdownRef}>
                    Invest 
                    <img 
                      src={displayListIcon} 
                      alt="Icon" 
                      className="ml-2 h-[13px] w-[15px]"
                      onClick={() => setInvestDropdownVisible(!isInvestDropdownVisible)}
                    />
                    {isInvestDropdownVisible && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                        <ul>
                          <li className="p-2 hover:bg-gray-200">Investment Properties</li>
                          <li className="p-2 hover:bg-gray-200">Tenanted Property Sales</li>
                        </ul>
                      </div>
                    )}
                </li>
                <li className="cursor-pointer flex items-center">Manage <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]" /></li>
                <li className="cursor-pointer flex items-center">Rent <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]" /></li>
                <li className="cursor-pointer flex items-center">Other Services <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]" /></li>
                <li className="cursor-pointer flex items-center">About us <img src={displayListIcon} alt="Icon" className="ml-2 h-[13px] w-[15px]" /></li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </div>
    </div>
  )
}
