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

import NavBar from '../NavBar/NavBar'
const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isApp, setIsApp] = useState(false);
  const [isAds, setIsAds] = useState(false); 
  const [isCon, setIsCon] = useState(false); 
  const location = useLocation();
  const isOpen = open ? "" : "displayNone";
  const subMenuButtonLabel = "More";

  useEffect(() => {
    setIsApp(location.pathname === "/App");
    setIsAds(location.pathname === '/HVAC-APP-LP3');
    setIsCon(location.pathname === '/Contact');
    
  }, [location]);

  const isHeaderOpen = () => {
    return open ? "open" : "";
  };

  const getLogo = () => {
    return (isApp || isAds || isCon) && !open ? bluonLogoSecondary : bluonLogo;
  };
  const getColor = () => {
    return (isApp || isAds || isCon) ? '-white' : '';
  };
  const getBack = () => {
    console.log(location.pathname, '!!!!!!');
    return isCon ? '-white-contact' : ''; 
  }

  const getHamburgerIcon = () => {
    return (isApp || isAds || isCon) && !open ? hamburgerIconSecondary : hamburgerIconPrimary;
  };

  const resetOpen = () => {
    setMenuOpen(true);
    setSubMenuOpen(false);
  };

  return (
    <div className={`head-wrapper${getBack()}`}>
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
      <div className="desktop-header">
          
          <Link to={'/'}>
            <img src={getLogo()} alt="bluon-logo" />
          </Link>
          <div className="desktop-header-nav-wrapper">
            <div className="desktop-header-nav">
              <NavBar />
            </div>
            <div className={`desktop-header-blive${getColor()}`}>
                <p>Looking for BluonLive?&nbsp;</p> <a href="https://bluonlive.com/" className="nav-login">Login here</a>
            </div>
          </div>
          
      </div>
    </div>
  );
};

export default Header;
