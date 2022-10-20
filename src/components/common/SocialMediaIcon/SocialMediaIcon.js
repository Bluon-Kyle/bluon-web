import React from "react";

const SocialMediaIcon = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );
};

export default SocialMediaIcon;
