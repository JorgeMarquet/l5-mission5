import React, { useState } from "react";
import reviewData from "../data/ReviewData";
import ReviewCard from "../data/ReviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const array1Data = reviewData[0].data;
  const array2Data = reviewData[1].data;
  const array3Data = reviewData[2].data;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div className="relative w-[1440px]">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 w-[900px]">
          {currentIndex === 0 &&
            array1Data.map((item) => (
              <div key={item.id} className="col-span-1 -mt-16">
                <ReviewCard review={item} />
              </div>
            ))}
          {currentIndex === 1 &&
            array2Data.map((item) => (
              <div key={item.id} className="col-span-1 -mt-16">
                <ReviewCard review={item} />
              </div>
            ))}
          {currentIndex === 2 &&
            array3Data.map((item) => (
              <div key={item.id} className="col-span-1 -mt-16">
                <ReviewCard review={item} />
              </div>
            ))}
        </div>
      </div>
      <div className="">
        <button onClick={prevSlide} className="ml-6 prev-button absolute left-0 top-1/2 transform -translate-y-1/2">
          <FontAwesomeIcon className="w-8 h-8 hover:w-10 hover:h-10" icon={faChevronLeft} />
        </button>
      </div>
      <button onClick={nextSlide} className="mr-6 next-button absolute right-0 top-1/2 transform -translate-y-1/2">
        <FontAwesomeIcon className="w-8 h-8 hover:w-10 hover:h-10" icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Carousel;
