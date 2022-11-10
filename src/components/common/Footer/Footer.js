import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import bluonLogoSecondary from "../../../assets/logo/bluon-logo-secondary.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import emailIcon from "../../../assets/icons/email.svg";
import IconInformation from "../IconInformation/IconInformation";

import "./_footer.scss";

const Footer = () => {
  // contact and app is dark blue
  // rest is light blue
  const [darkBlue, setDarkBlue] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setDarkBlue(
      location.pathname === "/App" || location.pathname === "/Contact"
    );
  }, [location]);

  return (
    <div className={`footer-background ${darkBlue ? "darkBlue" : "lightBlue"}`}>
      <div className="footer">
        {/* Logo */}
        <Link className="footer-logo" to="/">
          <img alt="logo" src={bluonLogoSecondary} />
        </Link>

        <div className="footer-link-contact-wrapper">
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
              href={"mailto:contact@bluon.com"}
              src={emailIcon}
              alt="email-icon"
              information="contact@bluon.com"
            />
            <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/6885872.js"></script>
          </div>
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

            <Link
              className="footer-terms-and-privacy-container-privacy"
              to="/Privacy"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/6885872.js"></script>
    </div>
  );
};

export default Footer;
