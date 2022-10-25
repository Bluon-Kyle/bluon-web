import React from "react";
import techSupports from "../../../../assets/images/app/techs.png";
import techlottie from '../../../../data/lottie/lottie-app-phone-wheel.json'
import LottieLoop2 from "../../../../components/common/LottieLoop/LottieLoop2";
import "./_techSupport.scss";
import Lottie from "react-lottie-player";

const TechSupport = () => {
  return (
    <div className="tech-support">
      <h2 className="tech-support-header">
        Real Support <br /> From Real Techs
      </h2>
      <h2 className="tech-support-header-two">Really F'n Fast</h2>
      <p className="tech-support-paragraph">
        Our team has pretty much seen it all. From mini-splits to chillers weare
        here to help.
      </p>

      <LottieLoop2 anii={techlottie}/>

      <img
        className="tech-support-image"
        src={techSupports}
        alt="tech-supports"
      />
    </div>
  );
};

export default TechSupport;
