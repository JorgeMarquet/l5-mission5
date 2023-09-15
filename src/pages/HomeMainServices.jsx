import React from 'react'
import BackgroundPhoto from '../images/MainServicesAucklandCitySunset.png'
import Invest from '../images/houseWithKeys.png'
import Rent from '../images/rentIcon.png'

export default function HomeMainServices() {
  return (
    <div>
        {/* BACKGROUND IMAGE*/}
        <div>
            <img src= {BackgroundPhoto}/>
        </div>

        {/* MAIN SERVICES CARD*/}
        <div className={"Services"}>
            <div>
                <img src= {Invest}/>
                <p>Invest with Us</p>
            </div>
            <div>
                <img src= {Rent}/>
                <p>Properties for Rent</p>
            </div>
            <div>
                Property Management
            </div>
            <div>
                Property Appraisal
            </div>
        </div>

        {/* INSPIRATIONAL QUOTE*/}
        <div>
            <p>Working with you for you</p>
            <p>We offered tailored services</p>
        </div>
    </div>
  )
}
