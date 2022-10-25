import React from "react";
import { NavLink } from "react-router-dom";
import angleBracketLeft from "../../../assets/icons/angle-bracket-left.svg";

import "./_hamburgerSubMenu.scss";

const HamburgerSubMenu = ({
  subMenuOpen,
  subMenuOptions,
  setSubMenuOpen,
  setMenuOpen,
  subMenuButtonLabel,
  setOpen
}) => {
  const isOpen = subMenuOpen ? "" : "displayNone";

  const handleOnClick = () => {
    setSubMenuOpen(false);
    setMenuOpen(true);
  };
  const close = () => {
    setOpen(false); 
  }

  const renderBackButton = () => {
    return (
      <li>
        <button onClick={handleOnClick}>
          <img src={angleBracketLeft} alt="back-button" />
        </button>
      </li>
    );
  };

  const renderSubMenuOptions = () => {
    const activeClassName = (isActive) => {
      return isActive ? "active" : undefined;
    };

    return subMenuOptions.map(({ label, route, href }, i) => {
      const MenuLink = () => {
        return (
          <li>
            <NavLink to={route} className={activeClassName()} onClick={close}>
              {label}
            </NavLink>
          </li>
        );
      };

      const MenuExternalLink = () => {
        return (
          <li>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          </li>
        );
      };

      return route ? <MenuLink key={i} /> : <MenuExternalLink key={i} />;
    });
  };

  return (
    <ul className={`hamburger-sub-menu ${isOpen}`}>
      {renderBackButton()}
      <h2>{subMenuButtonLabel}</h2>
      {renderSubMenuOptions()}
    </ul>
  );
};

export default HamburgerSubMenu;
