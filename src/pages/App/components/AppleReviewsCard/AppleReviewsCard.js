import React, { useState } from "react";
import { getStars } from "../../../../utils/getStars";

import "./_appleReviewsCard.scss";

const AppleReviewsCard = ({ body, rating, reviewerNickname, title }) => {
  const [readMore, setReadMore] = useState(false);

  const handleOnClick = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="apple-review-card">
      <p className="apple-review-card-name">{reviewerNickname}</p>
      <img src={getStars(rating)} alt="rating" />
      <h2 className="apple-review-card-title">{title}</h2>
      <div className={`apple-review-card-body ${readMore ? "read-more" : ""}`}>
        {body}
      </div>

      <button className="apple-review-card-button" onClick={handleOnClick}>
        {!readMore ? "Read More" : "Hide"}
      </button>
    </div>
  );
};

export default AppleReviewsCard;
