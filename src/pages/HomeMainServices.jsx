import React from "react";
import BackgroundPhoto from "../images/MainServicesAucklandCitySunset.png";
import Invest from "../images/houseWithKeys.png";
import Rent from "../images/rentIcon.png";
import Manage from "../images/managementIcon.png";
import Appraisal from "../images/appraisalIcon.png";

export default function HomeMainServices() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px]">
        {/* BACKGROUND IMAGE */}
        <div className="bg-center bg-cover h-[650px] flex items-start justify-start p-10" style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
          <div className="text-left">
            <div className="text-black text-7xl">Auckland's</div>
            <div className="text-black text-5xl font-semibold">most trusted</div>
            <div className="text-black text-7xl font-bold">Property Experts</div>
          </div>
        </div>

        {/* MAIN SERVICES CARDS */}
        <div className="Services flex justify-center bg-gradient-to-t from-footergradwhite to-footergradmidgrey">
            <div 
            className="flex flex-col items-center justify-center w-[300px] h-[270px] border bg-white rounded-xl pt-2 pr-2 pb-2 pl-2 mt-10 mb-8 ml-4 mr-4"
            style={{ 
                boxShadow: '0 5px 8px #c2c0c0',
                borderColor: '#808080' 
            }}
            >
            <img className="w-32 h-32" src={Invest} alt="Invest" />
            <p style={{ color: '#000000', fontSize: '26px', fontWeight: 650 }}>
            Invest with Us
            </p>
            </div>


            <div 
            className="flex flex-col items-center justify-center w-[300px] h-[270px] border bg-white border-black rounded-xl pt-2 pr-2 pb-2 pl-2 mt-10 mb-8 ml-4 mr-4"
            style={{ 
                boxShadow: '0 5px 8px #c2c0c0',
                borderColor: '#808080' 
            }}
            >
            <img className="w-32 h-32" src={Rent} alt="Rent" />
            <p style={{ color: '#000000', fontSize: '26px', fontWeight: 650 }}>
                Properties for Rent
            </p>
          </div>

          <div 
            className="flex flex-col items-center justify-center w-[300px] h-[270px] border bg-white border-black rounded-xl pt-2 pr-2 pb-2 pl-2 mt-10 mb-8 ml-4 mr-4"
            style={{ 
                boxShadow: '0 5px 8px #c2c0c0',
                borderColor: '#808080' 
            }}
            >
            <img className="w-32 h-32" src={Manage} alt="Property Management" />
            <p style={{ color: '#000000', fontSize: '26px', fontWeight: 650 }}>
                Property Management
            </p>
          </div>

          <div 
            className="flex flex-col items-center justify-center w-[300px] h-[270px] border bg-white border-black rounded-xl pt-2 pr-2 pb-2 pl-2 mt-10 mb-8 ml-4 mr-4"
            style={{ 
                boxShadow: '0 5px 8px #c2c0c0',
                borderColor: '#808080' 
            }}
            >
            <img className="w-32 h-32" src={Appraisal} alt="Property Appraisal" />
            <p style={{ color: '#000000', fontSize: '26px', fontWeight: 650 }}>
                Property Appraisal
            </p>
          </div>
        </div>

        {/* INSPIRATIONAL QUOTE */}
        <div className="Quote border-t border-b border-black flex flex-col items-center justify-center py-10"
        style={{ 
            boxShadow: '0 5px 8px #c2c0c0',
            borderColor: '#808080' 
        }}
        >
          <div className="text-black text-6xl font-bold">Working with you, for you. </div>
          <div className="text-black text-5xl font-semibold text-center leading-relaxed">We offer tailored services</div>
        </div>
      </div>
    </div>
  );
}
