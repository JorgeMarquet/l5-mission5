import React from "react";
import { Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slide1 from "./Carousel3/Slide1";
import Slide2 from "./Carousel3/Slide2.jsx";
import Slide3 from "./Carousel3/Slide3.jsx";
import Slide4 from "./Carousel3/Slide4.jsx";
import Slide5 from "./Carousel3/Slide5.jsx";

const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-black/50 hover:bg-black dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-black dark:bg-gray-800",
    },
    base: "h-5 w-5 rounded-full",
    wrapper: "absolute bottom-6 ml-40 flex space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

function LeftControl({ onClick }) {
  return (
    <div className="carousel-control" onClick={onClick}>
      <FontAwesomeIcon className="w-8 h-8" icon={faChevronLeft} />
    </div>
  );
}

function RightControl({ onClick }) {
  return (
    <div className="carousel-control" onClick={onClick}>
      <FontAwesomeIcon className="w-8 h-8" icon={faChevronRight} />
    </div>
  );
}

export default function StaticCarousel() {
  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px] ml-12">
        <div className="flex justify-start">
          <h1 className="flex text-5xl text-[#4A5468] font-bold">Steps to a Successful Tenancy</h1>
        </div>
        <div
          className="w-[1350px] h-[550px] mt-4"
          style={{
            boxShadow: "0 5px 8px #c2c0c0",
            borderColor: "#808080",
          }}
        >
          <Carousel theme={customTheme} slideInterval={5000} pauseOnHover leftControl={<LeftControl />} rightControl={<RightControl />}>
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
          </Carousel>
        </div>
        <div className="flex items-center mt-28 mb-20">
          <h1 className="flex justify-center text-5xl mr-16 font-semibold">Already found your new home?</h1>
          <button
            className="w-[280px] h-[50px] bg-themered rounded-lg text-white text-lg font-semibold  active:bg-violet-700"
            style={{
              boxShadow: "0 5px 8px #c2c0c0",
              borderColor: "#808080",
            }}
          >
            Apply here
          </button>
        </div>
      </div>
    </div>
  );
}
