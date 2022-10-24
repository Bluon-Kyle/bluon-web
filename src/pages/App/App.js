import React from "react";
import AppButton from "../../components/common/AppButton";
import MostLovedApp from "../../components/common/most-loved-app/MostLovedApp";

// images
// import appExamples from "../../assets/images/app/app-phone.png";
import appTechs from "../../assets/images/app/techs.png";
import appJoin from "../../assets/images/app/join-movement-mobile.png";

import "./_app.scss";
import ButtonImage from "../../components/common/ButtonImage/ButtonImage";
import iPhoneImage from "../../assets/images/buttons/download-iphone.png";
import androidImage from "../../assets/images/buttons/download-samsung.png";
import stamp from "../../assets/images/app/stamp.png";
import phones from "../../assets/images/app/phones.png";
import AppBackground from "./components/AppBackground/AppBackground";
import FrontPage from "./components/FrontPage/FrontPage";
import LottiePlayers from "./components/LottiePlayers/LottiePlayers";
import TechSupport from "./components/TechSupport/TechSupport";
import AppleReviews from "./components/AppleReviews/AppleReviews";

const App = () => {
  return (
    <div className="app">
      <AppBackground />
      <FrontPage />
      <LottiePlayers />
      <TechSupport />
      {/* Video */}
      <AppleReviews />
      {/* Video */}
    </div>
  );
  //   <div className="app">
  //     <div className="app-header">
  //       <h2>
  //         The App
  //         <br />
  //         HVAC Techs Actually Use
  //       </h2>

  //       <div className="app-top-btn-wrapper">
  //         <ButtonImage href={iPhoneHref} src={iPhoneImage} />
  //         <ButtonImage href={androidHref} src={androidImage} />
  //       </div>

  //       <img className="app-top-badge" alt="its free!" src={appBadge} />

  //       <div className="app-top-content">
  //         <img
  //           className="app-top-content-img"
  //           alt="app examples"
  //           src={appExamples}
  //         />
  //       </div>
  //     </div>

  //     <div className="app-homebase">
  //       <div className="app-homebase-text-wrapper">
  //         <h2>Homebase for HVAC Techs</h2>
  //         <p>
  //           We created the Bluon App specifically for HVAC technicians to make
  //           day-to-day life easier and to connect with local suppliers.
  //         </p>
  //       </div>
  //       <div className="app-homebase-accordion">CONTENT FILLER</div>
  //     </div>

  //     <div className="app-support bg-img-eclipse">
  //       <div className="app-support-spacer">
  //         <div className="app-support-text-wrapper">
  //           <h2> Real Support From Real Techs.</h2>
  //           <h2 className="app-support-blue-h2">Really F'n Fast.</h2>
  //           <p>
  //             Our team has pretty much seen it all. From mini-spits to chillers,
  //             we are here to help!
  //           </p>
  //         </div>
  //       </div>
  //       <div className="app-support-image">
  //         <img
  //           className="app-support-image-techs"
  //           alt="check out our techs!"
  //           src={appTechs}
  //         />
  //       </div>
  //     </div>

  //     <div className="app-youtube">
  //       {/* <video className='home-video' autoPlay playsInline muted loop src={video1}></video> */}
  //       <iframe
  //         className="app-youtube-video1"
  //         src={"https://www.youtube.com/embed/MXwlOi6YfXU"}
  //         title="The HVAC App That Will Change Your Life"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //       ></iframe>
  //     </div>

  //     <div className="app-testimonials">
  //       <MostLovedApp />
  //     </div>

  //     <div className="app-community">
  //       <div className="app-community-text">
  //         <div className="app-community-text-wrapper">
  //           <h2>Join the Bluon Community</h2>
  //           <p>Dedicated to making the lives of HVAC techs better.</p>
  //         </div>
  //         <div className="app-community-links">
  //           <ButtonImage href={iPhoneHref} src={iPhoneImage} />
  //           <ButtonImage href={androidHref} src={androidImage} />
  //         </div>
  //       </div>
  //       <div className="app-community-img-wrapper">
  //         <img className="app-community-img" alt="app examples" src={appJoin} />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default App;
