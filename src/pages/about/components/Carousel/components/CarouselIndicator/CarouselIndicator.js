import React from "react";

import "./_carouselIndicator.scss";

const CarouselIndicator = ({ index, setIndex, activeIndex }) => {
  const handleOnClick = () => {
    setIndex(index);
  };

  return (
    <button
      className={`carousel-indicator-dot ${
        index === activeIndex ? "active" : ""
      }`}
      onClick={handleOnClick}
    ></button>
  );
};

export default CarouselIndicator;
