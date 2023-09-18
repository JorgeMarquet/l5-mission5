import { Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slide1 from "./Carousel2/Slide1";
import Slide2 from "./Carousel2/Slide2";
import Slide3 from "./Carousel2/Slide3";

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
    wrapper: "absolute bottom--5 left-1/2 flex -translate-x-1/2 space-x-3",
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
    <div className="flex flex-col items-center min-w-fit h-[940px]">
      <div>
        <h1 className="flex justify-center mt-28 mb-20 text-5xl font-semibold">Customer Reviews</h1>
      </div>
      <div className="w-[1440px] h-[660px]">
        <Carousel theme={customTheme} slideInterval={5000} pauseOnHover leftControl={<LeftControl />} rightControl={<RightControl />} indicators="X">
          <Slide1 />
          <Slide2 />
          <Slide3 />
        </Carousel>
      </div>
    </div>
  );
}
