import React from "react";
import { Carousel } from "react-responsive-carousel";

export function Slider({
  children,
  onChange,
  selectedItem,
  displayItems,
  loop,
}) {
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        onChange={onChange}
        selectedItem={selectedItem}
        centerSlidePercentage={100 / displayItems}
        centerMode
        infiniteLoop={loop}
        preventMovementUntilSwipeScrollTolerance={true}
        // swipeScrollTolerance={20}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center opacity-50 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <div
                className={`carousel-arrow max-sm:w-[30px] max-sm:h-[30px] border-green`}
              >
                <i className={`fa-solid fa-angle-left text-green`}></i>
              </div>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center opacity-50 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <div
                className={`carousel-arrow max-sm:w-[30px] max-sm:h-[30px] !border-green`}
              >
                <i className={`fa-solid fa-angle-right text-green`}></i>
              </div>
            </div>
          );
        }}
      >
        {children}
      </Carousel>
    </>
  );
}
