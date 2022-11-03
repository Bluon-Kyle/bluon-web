import React from "react";

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
      <div className="app-youtube-video">
        <iframe
          className="app-youtube-video-1"
          src={"https://www.youtube.com/embed/lKmUx_tqr9o"}
          title="The HVAC App That Will Change Your Life"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <AppleReviews />
      <JoinBluon />

      {/* Video */}
      <div className="app-youtube-video">
        <video className="app-youtube-video-2" autoPlay muted loop>
          <source src={bluonVideo} type="video/mp4" />
        </video>
      </div>
      

      <JoinBannerApp
        title={"Join the Bluon Community"}
        subtitle={"Dedicated to making the lives of HVAC techs better."}
      />
    </div>
  );
};

export default App;
