import React, { Component } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="w-screen h-[940px]">
        <h1 className="flex justify-center mt-20 text-5xl font-semibold">Customer Reviews</h1>
        <Slider {...settings} className="border">
          <div className="w-screen h-[800px]">
            <h3 className="flex justify-center">1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
