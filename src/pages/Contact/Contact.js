import React from "react";
import IconInformation from "../../components/common/IconInformation/IconInformation";
import HubspotForm from "../../components/common/HubspotForm/HubspotForm";
import phoneIcon from "../../assets/icons/phone-white.png";
import emailIcon from "../../assets/icons/email.svg";
import mapPointerIcon from "../../assets/icons/map-pointer.png";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import twitterIcon from "../../assets/icons/twitter.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

import "./_contact.scss";
import SocialMediaIcon from "../../components/common/SocialMediaIcon/SocialMediaIcon";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact">
        {/* title */}
        <h2 className="contact-title">
          Contact <br />
          Bluon
        </h2>

        {/* information */}
        <ul className="contact-information-list">
          <li>
            <IconInformation
              href={"tel:+1-855-425-8686"}
              src={phoneIcon}
              alt="phone-icon"
              information="1-855-425-8686"
            />
          </li>
          <li>
            <IconInformation
              href={"mailto:info@bluon.com"}
              src={emailIcon}
              alt="email-icon"
              information="info@bluon.com"
            />
          </li>
          <li>
            <IconInformation
              href={
                "https://www.google.com/search?q=18+Bunsen+Irvine%2C+CA%2C+92618+United+States&rlz=1C5CHFA_enPH988PH988&oq=18+Bunsen+Irvine%2C+CA%2C+92618+United+States&aqs=chrome..69i57j0i546.1252j0j7&sourceid=chrome&ie=UTF-8"
              }
              src={mapPointerIcon}
              alt="map-pointer-icon"
              information="18 Bunsen Irvine, CA, 92618 United States"
            />
          </li>
        </ul>

        {/* social media */}
        <ul className="contact-social-media-list">
          <li>
            <SocialMediaIcon
              href={"https://www.facebook.com/BluonInc/"}
              src={facebookIcon}
              alt={"facebook-icon"}
            />
          </li>
          <li>
            <SocialMediaIcon
              href={"https://www.instagram.com/bluon_inc/?hl=en"}
              src={instagramIcon}
              alt={"instagram-icon"}
            />
          </li>
          <li>
            <SocialMediaIcon
              href={"https://twitter.com/bluoncommunity"}
              src={twitterIcon}
              alt={"twitter-icon"}
            />
          </li>
          <li>
            <SocialMediaIcon
              href={"https://www.linkedin.com/company/bluon-inc"}
              src={linkedinIcon}
              alt={"linkedin-icon"}
            />
          </li>
        </ul>
      </div>
      <HubspotForm
        portalId={"6885872"}
        formId={"1dc300d2-84df-4e26-8ff5-3f2918f17468"}
        navigateTo={"/ThankYou"}
        className="mobile"
      />
    </div>
  );
};

export default ContactUs;
