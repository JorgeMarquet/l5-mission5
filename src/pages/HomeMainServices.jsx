import React from 'react';
import BackgroundPhoto from '../images/MainServicesAucklandCitySunset.png';
import Invest from '../images/houseWithKeys.png';
import Rent from '../images/rentIcon.png';

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

        {/* MAIN SERVICES CARD */}
        <div className="Services">
            <div>
                <img src={Invest} alt="Invest" />
                <p>Invest with Us</p>
            </div>
            <div>
                <img src={Rent} alt="Rent" />
                <p>Properties for Rent</p>
            </div>
            <div>
                Property Management
            </div>
            <div>
                Property Appraisal
            </div>
        </div>

        {/* INSPIRATIONAL QUOTE */}
        <div>
            <p>Working with you for you</p>
            <p>We offer tailored services</p>
        </div>
    </div>
  );
}
