import React from "react";
import AppButton from "../AppButton";
import video from "../../../assets/video/BluonTechPortal.mp4";
import app_img from "../../../assets/logo/bluon-app-logo.svg";
import "./_most-loved-app.scss";

const MostLovedApp = () => {
  const app_phone = require("../../../assets/images/testi-phone.png");
  return (
    <div className="mla">
      <div className="mla-top">
        
        <span className="mla-top-text">
          <h3>The Most Loved App</h3>
          <p>This is the real deal</p>
          <h4>
            "Bluon is the best app that you can<br></br>
            possibly get."
          </h4>
        </span>
        <div className="mla-top-img">
          <img className="mla-top-img-app" alt="app examples" src={app_phone} />
        </div>
      </div>
      
      <div className="mla-testimonials">
        <div className="testimonials"></div>
      </div>
      
      <div className="mla-join">
        <img alt="check out our app and make your life easier!" src={app_img} className="mla-join-logo" />
      </div>
      <h3 className="mla-link-text">Join the Bluon Community</h3>
      <div className="mla-link-wrapper">
        <AppButton className="link" type="ios" />
        <img alt="check out our app" src={app_img} className="app-logo-desktop" />
        <AppButton className="link" type="andriod" />
      </div>

      <div className="mla-video">
        <video
          className="video"
          autoPlay
          playsInline
          muted
          loop
          src={video}
        ></video>
      </div>
    </div>
  );
};

export default MostLovedApp;
