import React from "react";
import FeaturedNewsCard from "./components/FeaturedNewsCard/FeaturedNewsCard";
import NewsCard from "./components/NewsCard/NewsCard";
import { news } from "./data/news";

const News = () => {
  const featuredNews = news[0];
  const renderNews = () => {
    return news.slice(1).map((article, i) => {
      return <NewsCard key={i} {...article} />;
    });
  };

  return (
    <div>
      <FeaturedNewsCard {...featuredNews} />
      {renderNews()}
    </div>
  );
};

export default News;
