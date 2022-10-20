import React from "react";

const IconInformation = ({ className, href, src, alt, information }) => {
  return (
    <a className={className} href={href}>
      <img alt={alt} src={src} />
      {information}
    </a>
  );
};

export default IconInformation;
