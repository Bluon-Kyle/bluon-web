import React, { useEffect, useState } from "react";
import CarouselCard from "./components/CarouselCard/CarouselCard";
import CarouselIndicator from "./components/CarouselIndicator/CarouselIndicator";

import "./_carousel.scss";

const Carousel = ({ srcList }) => {
  const [index, setIndex] = useState(0);

  const nextCard = (i) => {
    if (i + 1 < srcList.length) {
      return i + 1;
    }

    return 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevState) => {
        return nextCard(prevState);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderCards = () => {
    return srcList.map((src) => {
      return <CarouselCard key={src} src={src} />;
    });
  };

  const renderIndicators = () => {
    return srcList.map((src, i) => {
      return (
        <CarouselIndicator
          key={src}
          index={i}
          setIndex={setIndex}
          activeIndex={index}
        />
      );
    });
  };

  const stripStyle = {
    transform: `translateX(${-index * 100}vw)`,
  };

  return (
    <div>
      <div className="carousel">
        <div className="carousel-strip" style={stripStyle}>
          {renderCards()}
        </div>
      </div>
      <div className="carousel-indicators">{renderIndicators()}</div>
    </div>
  );
};

export default Carousel;
