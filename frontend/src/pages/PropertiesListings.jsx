import React from 'react'
import TopNavBar from './shared-components/TopNavBar'
import Footer from './shared-components/Footer'
import PropertiesListingsCards from './PropertiesListingsCards'
import PropertiesListingsFilter from './PropertiesListingsFilter'
import PropertiesListingsHeading from './PropertiesListingsHeading'

export default function PropertiesListings() {
  return (
    <div style={{ width: '1440px', margin: '0 auto' }}>
        <TopNavBar/>
            <PropertiesListingsHeading/>
            <PropertiesListingsFilter/>
            <PropertiesListingsCards/>
        <Footer/>
    </div>
  )
}

