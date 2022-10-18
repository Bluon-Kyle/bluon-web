import React from "react";
import "./_externalButton.scss";

const ExternalButton = ({ link, children, className }) => {
  return (
    <div className={className}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="external-button">{children}</button>
      </a>
    </div>
  );
};

export default ExternalButton;
