import React from 'react'
import TopNavBar from './shared-components/TopNavBar'
import Footer from './shared-components/Footer'
import PropertiesListingsCards from './PropertiesListingsCards'

export default function PropertiesListings() {
  return (
    <div style={{ width: '1440px', margin: '0 auto' }}>
        <TopNavBar/>
          <div className="Cards Container"> 
          Cards Container
            <PropertiesListingsCards/>
          </div>
        <Footer/>
    </div>
  )
}

