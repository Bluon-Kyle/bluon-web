import React, { useState } from "react";

import bluonLogo from "../../../assets/logo/bluon-logo-primary.svg";
import { options, subMenuOptions } from "../../../utilities/data/options";

import "./_header.scss";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import HamburgerSubMenu from "../HamburgerSubMenu/HamburgerSubMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const isOpen = open ? "" : "displayNone";
  const subMenuButtonLabel = "More";

  const resetOpen = () => {
    setMenuOpen(true);
    setSubMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="header-container">
        <img src={bluonLogo} alt="bluon-logo" />
        <HamburgerIcon open={open} setOpen={setOpen} resetOpen={resetOpen} />
      </div>
      <div className={`header-hamburger-menu ${isOpen}`}>
        <HamburgerMenu
          options={options}
          subMenuButtonLabel={subMenuButtonLabel}
          setSubMenuOpen={setSubMenuOpen}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <HamburgerSubMenu
          subMenuOpen={subMenuOpen}
          subMenuOptions={subMenuOptions}
          setSubMenuOpen={setSubMenuOpen}
          setMenuOpen={setMenuOpen}
          subMenuButtonLabel={subMenuButtonLabel}
        />
      </div>
    </div>
  );
};

export default Header;
