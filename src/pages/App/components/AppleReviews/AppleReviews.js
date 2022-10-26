import React from "react";
import fiveStars from "../../../../assets/icons/five-stars.png";
import ratings from "../../../../assets/images/app/ratings.png";

import "./_appleReviews.scss";

const AppleReviews = () => {
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
          <p className="apple-reviews-header-paragraph">This is the real deal</p>
        </div>

        <div className="apple-reviews-testimonial">
          <p className="apple-reviews-testimonial-quote">{`"Bluon is the best app that you can possibly get."`}</p>

        <div className="apple-reviews-testimonial-container">
          <p className="apple-reviews-testimonial-container-name">Chris Rice</p>
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
      <div></div>
    </div>
  );
};

export default AppleReviews;
