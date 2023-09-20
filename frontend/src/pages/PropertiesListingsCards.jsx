import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import BedroomIcon from '../images/bed.png';
import BathroomIcon from '../images/Bathroom.png';
import CarParkIcon from '../images/CarParkIcon.png';


export default function PropertiesListings() {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    // Fetch the listings data from your API when the component mounts
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/listings");
        const data = await response.json();
        setListings(data.listings);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    }
    
    fetchData();
  }, []);

  const startIdx = (currentPage - 1) * cardsPerPage;
  const cardsToShow = listings.slice(startIdx, startIdx + cardsPerPage);
  const totalPages = Math.ceil(listings.length / cardsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <div className="flex flex-wrap justify-center">
        {cardsToShow.map(listing => (
          <PropertiesListingsCards key={listing.listingID} listing={listing} />
        ))}
      </div>
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

function PropertiesListingsCards({ listing }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
      listing.image1,
      listing.image2,
      listing.image3,
      listing.image4,
      listing.image5
  ].filter(Boolean); // Filter out any null or undefined values

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
          <Link to={`/listing/${listing.listingID}`}>
              <ImageCarousel images={images} currentIndex={currentIndex} onSlideChange={handleSlideChange} />
          </Link>
          <ListingInfo listing={listing} />
      </div>
  );
}

function ImageCarousel({ images, currentIndex, onSlideChange }) {
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
          {/* Remaining Carousel controls code... */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button className="p-2 bg-black bg-opacity-50 text-white" onClick={() => carousel.current.slidePrev()}>‹</button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button className="p-2 bg-black bg-opacity-50 text-white" onClick={() => carousel.current.slideNext()}>›</button>
          </div>
        </div>
    );
}

function ListingInfo({ listing }) {
    const details = [
      { icon: BedroomIcon, number: listing.bedrooms },
      { icon: BathroomIcon, number: listing.bathrooms },
      { icon: CarParkIcon, number: listing.parking }
    ];
  
    return (
      <div className="p-4 h-1/3">
        <h2 className="text-xl font-bold"> {listing.address}. {listing.title}</h2>
        <ul className="flex space-x-4 mt-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center font-bold text-gray-500">
              <img src={detail.icon} alt="" className="h-6 w-6 mr-2"/> {detail.number}
            </li>
          ))}
        </ul>
        <div className="mt-2 text-xl font-bold">{listing.price}/Week</div>
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