import React, { useEffect, useState } from "react";

import bluonLogo from "../../../assets/logo/bluon-logo-primary.svg";
import bluonLogoSecondary from "../../../assets/logo/bluon-logo-secondary.svg";
import hamburgerIconPrimary from "../../../assets/icons/hamburger-primary.svg";
import hamburgerIconSecondary from "../../../assets/icons/hamburger-secondary.svg";
import { options, subMenuOptions } from "../../../data/header/options";

import "./_header.scss";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import HamburgerSubMenu from "../HamburgerSubMenu/HamburgerSubMenu";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isApp, setIsApp] = useState(false);
  const location = useLocation();
  const isOpen = open ? "" : "displayNone";
  const subMenuButtonLabel = "More";

  useEffect(() => {
    setIsApp(location.pathname === "/App");
  }, [location]);

  const isHeaderOpen = () => {
    return open ? "open" : "";
  };

  const getLogo = () => {
    return isApp && !open ? bluonLogoSecondary : bluonLogo;
  };

  const getHamburgerIcon = () => {
    return isApp && !open ? hamburgerIconSecondary : hamburgerIconPrimary;
  };

  const resetOpen = () => {
    setMenuOpen(true);
    setSubMenuOpen(false);
  };

  return (
    <div className={`header ${isHeaderOpen()}`}>
      <div className="header-container">
        <Link to={'/'}>
          <img src={getLogo()} alt="bluon-logo" />
        </Link>
        <HamburgerIcon
          open={open}
          setOpen={setOpen}
          resetOpen={resetOpen}
          src={getHamburgerIcon()}
        />
      </div>
      <div className={`header-hamburger-menu ${isOpen}`}>
        <HamburgerMenu
          options={options}
          subMenuButtonLabel={subMenuButtonLabel}
          setSubMenuOpen={setSubMenuOpen}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setOpen = {setOpen}
        />
        <HamburgerSubMenu
          subMenuOpen={subMenuOpen}
          subMenuOptions={subMenuOptions}
          setSubMenuOpen={setSubMenuOpen}
          setMenuOpen={setMenuOpen}
          subMenuButtonLabel={subMenuButtonLabel}
          setOpen = {setOpen}
        />
      </div>
    </div>
  );
};

export default Header;
