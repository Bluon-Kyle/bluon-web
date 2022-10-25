import React from "react";
import hamburgerIcon from "../../../assets/icons/hamburger-primary.svg";
import hamburgerCloseIcon from "../../../assets/icons/hamburger-close.svg";

const HamburgerIcon = ({ open, setOpen, resetOpen, src = hamburgerIcon }) => {
  const handleOnClick = () => {
    setOpen(!open);
    resetOpen();
  };

  const HamburgerSVG = () => {
    return open ? (
      <img src={hamburgerCloseIcon} alt="hamburger-icon-close" />
    ) : (
      <img src={src} alt="hamburger-icon" />
    );
  };

  return (
    <button onClick={handleOnClick}>
      <HamburgerSVG />
    </button>
  );
};

export default HamburgerIcon;
