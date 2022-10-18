import React from "react";
import AppButton from "../AppButton";
import video from "../../../assets/video/BluonTechPortal.mp4";
import app_img from "../../../assets/images/bluon-app-logo.png";
import "./_most-loved-app.scss";

const MostLovedApp = () => {
  const app_phone = require("../../../assets/images/testi-phone.png");
  return (
    <div className="mla">
      <div className="mla-top">
        <div className="mla-top-img">
          <img className="mla-top-img-app" alt="app examples" src={app_phone} />
        </div>
        <span className="mla-top-text">
          <h1>The Most Loved App</h1>
          <p>This is the real deal</p>
          <h2>
            "Bluon is the best app that you can<br></br>
            possibly get."
          </h2>
        </span>
      </div>
      <div className="mla-testimonials">
        <div className="testimonials"></div>
      </div>

      <h3 className="mla-link-text">Join the Bluon Community</h3>
      <div className="mla-link-wrapper">
        <AppButton className="link" type="ios" />
        <img alt="check out our app" src={app_img} className="app-logo" />
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
