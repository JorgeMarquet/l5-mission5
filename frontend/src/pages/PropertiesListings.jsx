import React from 'react'
import TopNavBar from './shared-components/TopNavBar'
import Footer from './shared-components/Footer'
import PropertiesListingsCards from './PropertiesListingsCards'
import PropertiesListingsFilterController from './PropertiesListingsFilterController'

export default function PropertiesListings() {
  return (
    <div>
        <TopNavBar/>
          <div className="Cards Container"> 
          Cards Container
            <PropertiesListingsFilterController/>
            <PropertiesListingsCards/>
          </div>
        <Footer/>
    </div>
  )
}
