import React from "react";
import arrowRight from "../../../../assets/icons/arrow-right-blue.svg";

import "./_newsCard.scss";

const NewsCard = ({ src, date, title, link }) => {
  return (
    <div className="news-card">
      <div className="news-card-img-wrapper">
        <img className="news-card-img" src={src} alt={"news-card"} />
      </div>
      <div className="news-card-content-wrapper">
        <p className="news-card-date">{date}</p>
        <h3 className="news-card-title">{title}</h3>
        <a
          className="news-card-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="news-card-link-text">Read More</span>
          <img src={arrowRight} alt={"blue right-arrow"} />
        </a>
      </div>
      
    </div>
  );
};

export default NewsCard;
