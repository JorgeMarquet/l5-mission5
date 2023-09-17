import React from 'react'
import BackgroundPhoto from '../images/tenancyInformationBackground.png'

export default function TenancyInformationContent() {
  return (
    <div>
        {/* BACKGROUND PHOTO */}
        <div className="bg-center bg-cover h-[650px] flex items-center justify-start p-10" style={{ backgroundImage: `url(${BackgroundPhoto})` }}>
          <div className="text-left">
            <div className="text-white text-7xl">Finding</div>
            <div className="text-white text-7xl font-semibold">the property</div>
            <div className="text-white text-7xl font-bold">that's right for YOU</div>
          </div>
        </div>
    </div>
  )
}
