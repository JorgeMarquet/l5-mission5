import React from 'react';
import BackgroundPhoto from '../images/MainServicesAucklandCitySunset.png';
import Invest from '../images/houseWithKeys.png';
import Rent from '../images/rentIcon.png';
import Manage from '../images/managementIcon.png'
import Appraisal from '../images/appraisalIcon.png'

export default function HomeMainServices() {
  return (
    <div>
     {/* BACKGROUND IMAGE */}
        <div 
            className="bg-center bg-cover h-[600px] flex items-start justify-start p-10" 
            style={{ backgroundImage: `url(${BackgroundPhoto})` }}
        >
            <div className="text-left">
                <div className="text-black text-5xl">
                    Auckland's
                </div>
                <div className="text-black text-4xl font-semibold">
                    most trusted
                </div>
                <div className="text-black text-6xl font-bold">
                    Property Experts
                </div>
            </div>
        </div>

        {/* MAIN SERVICES CARDS */}
        <div className="Services flex justify-between Container">
            <div className="Service Card flex flex-col items-center">
                <img className="w-32 h-32" src={Invest} alt="Invest" />
                <p>Invest with Us</p>
            </div>
            <div className="Service Card flex flex-col items-center">
                <img className="w-32 h-32" src={Rent} alt="Rent" />
                <p>Properties for Rent</p>
            </div>
            <div className="Service Card flex flex-col items-center">
                <img className="w-32 h-32" src={Manage} alt="Property Management" />
                <p>Property Management</p>
            </div>
            <div className="Service Card flex flex-col items-center">
                <img className="w-32 h-32" src={Appraisal} alt="Property Appraisal" />
                <p>Property Appraisal</p>
            </div>
        </div>

        {/* INSPIRATIONAL QUOTE */}
        <div className ="Quote">
            <p>Working with you for you</p>
            <p>We offer tailored services</p>
        </div>
    </div>
  );
}