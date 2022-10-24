import React from "react";

import "./_buttonImage.scss";

const ButtonImage = ({ href, src }) => {
  return (
    <a
      className="button-image-container"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="button-image" src={src} alt="button" />
    </a>
  );
};

export default ButtonImage;
