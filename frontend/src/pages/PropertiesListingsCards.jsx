import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"; // For default styling

export default function PropertiesListings() {
  return (
    <div className="flex flex-wrap justify-between p-8">
      <PropertiesListingsCards />
      <PropertiesListingsCards />
      <PropertiesListingsCards />
      {/* Add more <PropertiesListingsCards /> components as you wish */}
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
  // For the prototype, let's use some placeholder images
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
        {/* This button will overlay the default previous button of the carousel */}
        <button className="p-2 bg-black bg-opacity-50 text-white">‹</button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        {/* This button will overlay the default next button of the carousel */}
        <button className="p-2 bg-black bg-opacity-50 text-white">›</button>
      </div>
    </div>
  );
}

function ListingInfo() {
  const title = "Listing Title"; // Prototype data
  const numbers = ["123", "456", "789"]; // Prototype data
  const pricePerWeek = "500/Week"; // Prototype data

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
