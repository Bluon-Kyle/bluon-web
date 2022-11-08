import React, { useCallback, useRef, useState } from "react";
import AppleReviewsCard from "../AppleReviewsCard/AppleReviewsCard";
import AppleReviewsIndicator from "../AppleReviewsIndicator/AppleReviewsIndicator";

import "./_appleReviewsSlide.scss";
const AppleReviewsSlide = ({ reviews, cardsPerSlide }) => {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const slideRef = useCallback((element) => {
    if (!element) {
      return;
    }
    const elementStyle = window.getComputedStyle(element);
    const baseTen = 10;
    const marginRight = parseInt(elementStyle.marginRight, baseTen);

    setSlideWidth(element.offsetWidth + marginRight);
  }, []);
  const numSlides = Math.floor(reviews.length / cardsPerSlide);

  const renderReviews = () => {
    // number of cards per slide
    let cardIndex = 0;
    const renderCards = () => {
      const cards = [];
      for (let i = 0; i < cardsPerSlide; i++) {
        const review = reviews[cardIndex];
        const appleReviewCard = (
          <AppleReviewsCard key={cardIndex} {...review.attributes} />
        );
        cards.push(appleReviewCard);
        cardIndex++;
      }

      return cards;
    };

    // number of slides
    let cardSlide = [];
    for (let i = 0; i < numSlides; i++) {
      const slide = (
        <div className="apple-review-slider-slide" key={i} ref={slideRef}>
          {renderCards()}
        </div>
      );
      cardSlide.push(slide);
    }

    return cardSlide;
  };

  const renderSlideIndicators = () => {
    const slideIndicators = [];
    for (let i = 0; i < numSlides; i++) {
      slideIndicators.push(
        <AppleReviewsIndicator
          key={i}
          index={i}
          setIndex={setIndex}
          activeIndex={index}
        />
      );
    }

    return slideIndicators;
  };

  const sliderStyle = {
    // width of slide + margin
    transform: `translateX(${-index * slideWidth}px)`,
  };

  return (
    <div className="apple-review-slider-container">
      <div className="apple-review-slider" style={sliderStyle}>
        {renderReviews()}
      </div>
      <div className="apple-review-indicator">{renderSlideIndicators()}</div>
    </div>
  );
};

export default AppleReviewsSlide;
