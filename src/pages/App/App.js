import React from "react";
import AppButton from "../../components/common/AppButton";
import MostLovedApp from "../../components/common/most-loved-app/MostLovedApp";

// images
import appBadge from "../../assets/images/app/badge-app.png";
import appExamples from "../../assets/images/app/app-phone.png";
import appTechs from "../../assets/images/app/techs.png";
import appJoin from "../../assets/images/app/join-movement-mobile.png";

import "./_app.scss";

const App = () => {
  return (
    <div className="app">
      <div className="app-top">
        <h2>
          The App HVAC Techs<br></br> Actually Use
        </h2>
        {/* <img src='./bg-app-header.jpg'></img> */}
        <div className="app-top-btn-wrapper">
          <AppButton className="app-top-btn" type="ios" />
          <AppButton className="app-top-btn" type="andriod" />
          <img className="app-top-badge" alt="its free!" src={appBadge} />
        </div>

        <div className="app-top-content">
          <img
            className="app-top-content-img"
            alt="app examples"
            src={appExamples}
          />
        </div>
      </div>

      <div className="app-homebase">
        <div className="app-homebase-text-wrapper">
          <h2>Homebase for HVAC Techs</h2>
          <p>
            We created the Bluon App specifically for HVAC technicians to make
            day-to-day life easier and to connect with local suppliers.
          </p>
        </div>
        <div className="app-homebase-accordion">CONTENT FILLER</div>
      </div>

      <div className="app-support bg-img-eclipse">
        <div className="app-support-spacer">
          <div className="app-support-text-wrapper">
            <h2> Real Support From Real Techs.</h2>
            <h2 className="app-support-blue-h2">Really F'n Fast.</h2>
            <p>
              Our team has pretty much seen it all. From mini-spits to chillers,
              we are here to help!
            </p>
          </div>
        </div>
        <div className="app-support-image">
          <img
            className="app-support-image-techs"
            alt="check out our techs!"
            src={appTechs}
          />
        </div>
      </div>

      <div className="app-youtube">
        {/* <video className='home-video' autoPlay playsInline muted loop src={video1}></video> */}
        <iframe
          className="app-youtube-video1"
          src={"https://www.youtube.com/embed/MXwlOi6YfXU"}
          title="The HVAC App That Will Change Your Life"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="app-testimonials">
        <MostLovedApp />
      </div>

      <div className="app-community">
        <div className="app-community-text">
          <div className="app-community-text-wrapper">
            <h2>Join the Bluon Community</h2>
            <p>Dedicated to making the lives of HVAC techs better.</p>
          </div>
          <div className="app-community-links">
            <AppButton className="app-link-btn" type="ios" />
            <AppButton className="app-link-btn" type="android" />
          </div>
        </div>
        <div className="app-community-img-wrapper">
          <img className="app-community-img" alt="app examples" src={appJoin} />
        </div>
      </div>
    </div>
  );
};

export default App;
