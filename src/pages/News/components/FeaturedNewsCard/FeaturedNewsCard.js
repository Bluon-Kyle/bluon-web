import React from "react";
import arrowRight from "../../../../assets/icons/arrow-right-blue.svg";

import "./_featuredNewsCard.scss";

const FeaturedNewsCard = ({ src, date, title, description, link }) => {
  return (
    <div className="featured-news-card">
      <img
        className="featured-news-card-img"
        src={src}
        alt={"featured-news-card"}
      />
      <p className="featured-news-card-date">{date}</p>
      <h3 className="featured-news-card-title">{title}</h3>
      <p className="featured-news-card-description">{description}</p>
      <a
        className="featured-news-card-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="featured-news-card-link-text">Read More</span>
        <img src={arrowRight} alt={"blue right-arrow"} />
      </a>
    </div>
  );
};

export default FeaturedNewsCard;
