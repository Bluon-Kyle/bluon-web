import React from "react";
import { NavLink } from "react-router-dom";
import angleBracketRight from "../../../assets/icons/angle-bracket-right.svg";

import "./_hamburgerMenu.scss";

const HamburgerMenu = ({
  options,
  subMenuButtonLabel,
  setSubMenuOpen,
  menuOpen,
  setMenuOpen,
}) => {
  const isOpen = menuOpen ? "" : "displayNone";

  const renderOptions = () => {
    const activeClassName = (isActive) => {
      return isActive ? "active" : undefined;
    };

    return options.map(({ label, route }, i) => {
      return (
        <li key={i}>
          <NavLink to={route} className={activeClassName()}>
            {label}
          </NavLink>
        </li>
      );
    });
  };

  const handleOnClick = () => {
    setMenuOpen(false);
    setSubMenuOpen(true);
  };

  const renderSubMenuButton = () => {
    return (
      <li>
        <button onClick={handleOnClick}>
          {subMenuButtonLabel}
          <img src={angleBracketRight} alt="sub-menu-button" />
        </button>
      </li>
    );
  };

  return (
    <ul className={`hamburger-menu ${isOpen}`}>
      {renderOptions()}
      {renderSubMenuButton()}
    </ul>
  );
};

export default HamburgerMenu;
