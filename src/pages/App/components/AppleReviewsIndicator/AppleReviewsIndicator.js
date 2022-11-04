import React from "react";

import "./_appleReviewsIndicator.scss";

const AppleReviewsIndicator = ({ index, setIndex, activeIndex }) => {
  const handleOnClick = () => {
    setIndex(index);
  };

  return (
    <button
      className={`apple-reviews-indicator-dot ${
        index === activeIndex ? "active" : ""
      }`}
      onClick={handleOnClick}
    ></button>
  );
};

export default AppleReviewsIndicator;
