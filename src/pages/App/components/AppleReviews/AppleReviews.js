import React, { useEffect, useState } from "react";
import fiveStars from "../../../../assets/icons/5-star.png";
import ratings from "../../../../assets/images/app/ratings.png";
import axios from "axios";

import "./_appleReviews.scss";
//import AppleReviewsCard from "../AppleReviewsCard/AppleReviewsCard";
import AppleReviewsSlide from "../AppleReviewsSlide/AppleReviewsSlide";

const AppleReviews = () => {
  const [appleReviews, setAppleReviews] = useState();

  const getAppleReviews = async () => {
    const result = await axios.get(
      "https://faas-sfo3-7872a1dd.doserverless.co/api/v1/web/fn-f0ae7bb3-5257-453f-bec3-5330ad4533fc/bluoncom/getAppleReviews"
    );

    return result.data;
  };

  // checks width
  // return 4, 6

  useEffect(() => {
    const retrieveAppleReviews = async () => {
      const reviews = await getAppleReviews();
      setAppleReviews(reviews.data);
    };
    retrieveAppleReviews();
  }, []);

  const renderAppleReviews = () => {
    return !appleReviews ? (
      <div>Loading...</div>
    ) : (
      <AppleReviewsSlide reviews={appleReviews} cardsPerSlide={2} />
    );
  };

  return (
    <div className="apple-reviews">
      <div className="apple-reviews-desk-ratings">
        <div className="apple-reviews-ratings-desk">
          <img className="apple-reviews-ratings" src={ratings} alt="ratings" />
        </div>
      </div>

      <div className="apple-reviews-desk-wrapper">
        <div className="apple-reviews-header">
          <h2 className="apple-reviews-header-heading">The Most Loved App</h2>
          <p className="apple-reviews-header-paragraph">
            This is the real deal
          </p>
        </div>

        <div className="apple-reviews-testimonial">
          <p className="apple-reviews-testimonial-quote">{`"Bluon is the best app that you can possibly get."`}</p>

          <div className="apple-reviews-testimonial-container">
            <p className="apple-reviews-testimonial-container-name">
              Chris Rice
            </p>
            <img
              className="apple-reviews-testimonial-container-stars"
              src={fiveStars}
              alt="5-stars"
            />
          </div>
        </div>
      </div>

      <div className="apple-reviews-ratings-wrapper">
        <img className="apple-reviews-ratings" src={ratings} alt="ratings" />
      </div>

      {/* Apple Reviews */}
      <div>{renderAppleReviews()}</div>
    </div>
  );
};

export default AppleReviews;
