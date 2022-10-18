import React from "react";
import "./_buttonLink.scss";

const ButtonLink = ({ link, children, color = "" }) => {
  return (
    <div className="button">
      <a
        className={`button-link ${color}`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
};

export default ButtonLink;
