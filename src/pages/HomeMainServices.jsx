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
        <div className="Services Container">
            <div className="Service Card">
                <img src={Invest} alt="Invest" />
                <p>Invest with Us</p>
            </div>
            <div className="Service Card">
                <img src={Rent} alt="Rent" />
                <p>Properties for Rent</p>
            </div>
            <div className="Service Card">
                <img src={Manage} alt="Property Management" />
                <p>Property Management</p>
            </div>
            <div className="Service Card">
                <img src={Appraisal} alt="Property Appraisal" />
                Property Appraisal
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