import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function MultiSlider({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomArrow = ({ onClick, side }) => {
    // onMove means if dragging or swiping in progress.
    return (
      <button
        onClick={onClick}
        className={`absolute ${side == "right" ? "right-[5%]" : "left-[5%]"}`}
      >
        <div
          className={`carousel-arrow sm:border-[3px] opacity-50 hover:opacity-100 max-sm:w-[25px] max-sm:h-[25px] border-[#646B74]`}
        >
          <i className={`fa-solid fa-angle-${side} text-[#646B74]`}></i>
        </div>
      </button>
    );
  };

  return (
    <Carousel
      containerClass={`w-8/12 sm:w-9/12 md:w-10/12 m-auto`}
      itemClass="carousel-item"
      responsive={responsive}
      infinite={true}
      swipeable={false}
      draggable={false}
      customRightArrow={<CustomArrow side="right" />}
      customLeftArrow={<CustomArrow side="left" />}
      autoPlay
      autoPlaySpeed={5000}
    >
      {children}
    </Carousel>
  );
}
