import React from "react";

import "./_carouselCard.scss";

const CarouselCard = ({ src }) => {
  return (
    <div className="carousel-card">
      <img className="carousel-card-image" alt='ccard' src={src} />
    </div>
  );
};

export default CarouselCard;
