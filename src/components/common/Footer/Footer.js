import React from "react";
import { Link } from "react-router-dom";
import bluonLogoSecondary from "../../../assets/logo/bluon-logo-secondary.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import emailIcon from "../../../assets/icons/email.svg";
import IconInformation from "../IconInformation/IconInformation";

const Footer = () => {
  return (
    <div className="footer">
      {/* Logo */}
      <Link className="footer-logo" to="/">
        <img alt="logo" src={bluonLogoSecondary} />
      </Link>

      {/* NavLinks */}
      <ul className="footer-list">
        <li className="footer-list-item">
          <Link className="footer-list-item-link" to="/About">
            About
          </Link>
        </li>
        <li className="footer-list-item">
          <Link className="footer-list-item-link" to="/News">
            News
          </Link>
        </li>
        <li className="footer-list-item">
          <Link className="footer-list-item-link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>

      {/* Contact Information */}
      <div className="footer-contact">
        <IconInformation
          className="footer-contact-phone"
          href={"tel:+1-855-425-8686"}
          src={phoneIcon}
          alt="phone-icon"
          information="1-855-425-8686"
        />
        <IconInformation
          className="footer-contact-email"
          href={"mailto:info@bluon.com"}
          src={emailIcon}
          alt="email-icon"
          information="info@bluon.com"
        />
      </div>

      {/* Terms and Privacy */}
      <div className="footer-terms-and-privacy">
        <div>2022 Bluon, Inc.</div>
        <div className="footer-terms-and-privacy-container">
          <Link
            className="footer-terms-and-privacy-container-terms"
            to="/Terms"
          >
            Terms & Conditions
          </Link>
          |
          <Link
            className="footer-terms-and-privacy-container-privacy"
            to="/Privacy"
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
