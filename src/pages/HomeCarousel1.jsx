import { Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slide1 from "./Carousel1/Slide1";
import Slide2 from "./Carousel1/Slide2";
import Slide3 from "./Carousel1/Slide3";
import Slide4 from "./Carousel1/Slide4";
import Slide5 from "./Carousel1/Slide5";

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
    <div className="flex flex-col items-center min-w-fit h-[535px]">
      <div className="w-[1440px] mt-8">
        <Carousel slideInterval={5000} pauseOnHover leftControl={<LeftControl />} rightControl={<RightControl />} indicators="X">
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
          <Slide5 />
        </Carousel>
      </div>
    </div>
  );
}
