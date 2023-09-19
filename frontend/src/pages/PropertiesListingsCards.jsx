import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Listing1 from '../images/listing1.png';
import Listing2 from '../images/listing2.png';
import Listing3 from '../images/listing3.png';
import Listing4 from '../images/listing4.png';
import BedroomIcon from '../images/bed.png';
import BathroomIcon from '../images/Bathroom.png';
import CarParkIcon from '../images/CarParkIcon.png';

export default function PropertiesListings() {
  const [currentPage, setCurrentPage] = useState(1);
  const allCards = Array(24).fill().map((_, index) => <PropertiesListingsCards key={index}/>);

  const cardsPerPage = 6;
  const startIdx = (currentPage - 1) * cardsPerPage;
  const cardsToShow = allCards.slice(startIdx, startIdx + cardsPerPage);

  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <div className="flex flex-wrap justify-center">
        {cardsToShow}
      </div>
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

function PropertiesListingsCards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleSlideChange = (event) => {
      setCurrentIndex(event.item);
    };
  
    return (
      <div 
        className="rounded-3xl border border-white overflow-hidden h-84 w-80 mx-14 my-8"
        style={{ 
          boxShadow: '10px 0 10px -5px rgba(0, 0, 0, 0.06), -10px 0 10px -5px rgba(0, 0, 0, 0.02), 0 10px 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        <ImageCarousel currentIndex={currentIndex} onSlideChange={handleSlideChange} />
        <ListingInfo />
      </div>
    );
  }
  
  

function ImageCarousel({ currentIndex, onSlideChange }) {
    const images = [ Listing1, Listing2, Listing3, Listing4 ];
    const carousel = React.useRef(null);

    const responsive = {
      0: { items: 1 },
      1024: { items: 1 },
    };

    return (
        <div className="relative w-full h-2/3 overflow-hidden">
          <AliceCarousel
            ref={carousel}
            itemsCountPerPage={1}
            responsive={responsive}
            activeIndex={currentIndex}
            onSlideChanged={onSlideChange}
            items={images.map((src, index) => (
              <div className="w-full h-64 flex items-center justify-center">
                <img 
                  src={src} 
                  alt={`Slide ${index + 1}`} 
                  key={index} 
                  className="w-full h-full object-cover" 
                  />
              </div>
            ))}
            controlsStrategy="none"
            controlsDisabled={true}
          />

        <div className="absolute inset-y-0 left-0 flex items-center z-10">
          <button className="p-2 bg-black bg-opacity-50 text-white" onClick={() => carousel.current.slidePrev()}>‹</button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-10">
          <button className="p-2 bg-black bg-opacity-50 text-white" onClick={() => carousel.current.slideNext()}>›</button>
        </div>
      </div>
    );
}

function getFontSizeClass(title) {
    if (title.length <= 30) return "text-xl";
    if (title.length <= 45) return "text-lg";
    if (title.length <= 50) return "text-base";
    return "text-sm"; // for longer titles
  }
  

  function ListingInfo() {
    const title = "2 Beach Road, Luxury Apartments"; // example title
    const pricePerWeek = "1000/Week";
  
    const details = [
      { icon: BedroomIcon, number: 3 },
      { icon: BathroomIcon, number: 2 },
      { icon: CarParkIcon, number: 1 }
    ];
  
    const titleClass = getFontSizeClass(title);
  
    return (
      <div className="p-4 h-1/3">
        <h2 className={`${titleClass} font-bold`}>{title}</h2>
        <ul className="flex space-x-4 mt-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center font-bold text-gray-500">
              <img src={detail.icon} alt="" className="h-6 w-6 mr-2"/> {detail.number}
            </li>
          ))}
        </ul>
        <div className="mt-2 text-xl font-bold">{pricePerWeek}</div>
      </div>
    );
  }
  

function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div className="flex space-x-4">
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNum = index + 1;
        const isActive = pageNum === currentPage;
        return (
          <button 
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`p-2 ${isActive ? 'bg-black text-white' : 'text-black'}`}
          >
            {pageNum}
          </button>
        );
      })}
    </div>
  );
}
