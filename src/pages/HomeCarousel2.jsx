import { Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slide1 from "./Carousel2/Slide1";
import Slide2 from "./Carousel2/Slide2";
import Slide3 from "./Carousel2/Slide3";

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
      <div className="w-[1440px]">
        <Carousel slideInterval={5000} pauseOnHover leftControl={<LeftControl />} rightControl={<RightControl />} indicators="X">
          <Slide1 />
          <Slide2 />
          <Slide3 />
        </Carousel>
      </div>
    </div>
  );
}
