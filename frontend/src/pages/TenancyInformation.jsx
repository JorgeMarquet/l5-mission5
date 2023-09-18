import React from 'react'
import TopNavBar from './shared-components/TopNavBar'
import Footer from './shared-components/Footer'
import TenancyInformationContent from './TenancyInformationContent.jsx'

export default function TenancyInformation() {
  return (
    <div>
        <div>
            <TopNavBar/>
            <TenancyInformationContent/>
            <Footer/>
        </div>

    </div>
  )
}
