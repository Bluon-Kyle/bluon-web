import React from "react";
import AppButton from "../../components/common/AppButton";
import MostLovedApp from "../../components/common/most-loved-app/MostLovedApp";

// images
// import appExamples from "../../assets/images/app/app-phone.png";
import appTechs from "../../assets/images/app/techs.png";
import appJoin from "../../assets/images/app/join-movement-mobile.png";

import "./_app.scss";
import AppBackground from "./components/AppBackground/AppBackground";
import FrontPage from "./components/FrontPage/FrontPage";
import LottiePlayers from "./components/LottiePlayers/LottiePlayers";
import TechSupport from "./components/TechSupport/TechSupport";
import AppleReviews from "./components/AppleReviews/AppleReviews";
import JoinBluon from "./components/JoinBluon/JoinBluon";
import bluonVideo from "../../assets/video/bluon-empowers-local-relationships.mp4";
import JoinBannerApp from "../../components/common/JoinBannerApp/JoinBannerApp";

const App = () => {
  return (
    <div className="app">
      <AppBackground />
      <FrontPage />
      <LottiePlayers />
      <TechSupport />

      {/* Video */}
      <iframe
        className="app-youtube-video-1"
        src={"https://www.youtube.com/embed/lKmUx_tqr9o"}
        title="The HVAC App That Will Change Your Life"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <AppleReviews />
      <JoinBluon />

      {/* Video */}
      <video className="app-youtube-video-2" autoPlay muted loop>
        <source src={bluonVideo} type="video/mp4" />
      </video>

      <JoinBannerApp
        title={"Join the Bluon Community"}
        subtitle={"Dedicated to making the livse of HVAC techs better."}
      />
    </div>
  );
};

export default App;
