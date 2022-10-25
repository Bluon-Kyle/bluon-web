import React, { useState, useEffect } from "react";
import arrowDownCollapsible from "../../../../../../assets/icons/arrow-down-collapsible.svg";
import "./_collapsible.scss";

const Collapsible = ({
  selected,
  setSelected,
  index,
  title,
  description,
  lottiePlayerJson,
}) => {
  const handleOnClick = () => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  const isCollapsed = () => {
    return selected !== index ? "displayNone" : "";
  };

  const isTransformed = () => {
    return selected !== index ? "" : "transform";
  };

  return (
    <div className="collapsible">
      <button
        className={`collapsible-button ${isTransformed()}`}
        onClick={handleOnClick}
      >
        <h2>{title}</h2>
        <img src={arrowDownCollapsible} alt="collapsible-button" />
      </button>

      <div className={`collapsible-content ${isCollapsed()}`}>
        <p className="collapsible-content-paragraph">{description}</p>
        {/* Lottie Player goes here */}
      </div>
    </div>
  );
};

export default Collapsible;
