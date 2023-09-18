import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"; // For default styling

export default function PropertiesListings() {
  const [currentPage, setCurrentPage] = useState(1);

  const allCards = Array(6).fill().map((_, index) => <PropertiesListingsCards key={index}/>); // Example with 7 cards

  const cardsPerPage = 6;
  const startIdx = (currentPage - 1) * cardsPerPage;
  const cardsToShow = allCards.slice(startIdx, startIdx + cardsPerPage);
  
  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <div className="flex flex-wrap justify-between">
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
    <div className="rounded-lg border border-black overflow-hidden w-1/4 m-4">
      <ImageCarousel currentIndex={currentIndex} onSlideChange={handleSlideChange} />
      <ListingInfo />
    </div>
  );
}

function ImageCarousel({ currentIndex, onSlideChange }) {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];

  return (
    <div className="relative">
      <AliceCarousel
        activeIndex={currentIndex}
        onSlideChanged={onSlideChange}
        items={images.map((src, index) => (
          <img src={src} alt={`Slide ${index + 1}`} key={index} className="object-cover" />
        ))}
        controlsStrategy="responsive"
      />
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button className="p-2 bg-black bg-opacity-50 text-white">‹</button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="p-2 bg-black bg-opacity-50 text-white">›</button>
      </div>
    </div>
  );
}

function ListingInfo() {
  const title = "Listing Title";
  const numbers = ["123", "456", "789"];
  const pricePerWeek = "500/Week";

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex space-x-4 mt-2">
        {numbers.map((num, index) => (
          <span key={index}>{num}</span>
        ))}
      </div>
      <div className="mt-2">{pricePerWeek}</div>
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
