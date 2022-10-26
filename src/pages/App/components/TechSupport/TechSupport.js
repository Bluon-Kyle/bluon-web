import React from "react";
import techSupports from "../../../../assets/images/app/techs.png";
import techlottie from '../../../../data/lottie/lottie-app-phone-wheel.json'
import LottieLoop3 from "../../../../components/common/LottieLoop/LottieLoop3";
import "./_techSupport.scss";

const TechSupport = () => {
  return (
    <div className="tech-support">
      <div className="tech-support-mobile">

        <h2 className="tech-support-header">
          Real Support <br /> From Real Techs
        </h2>
        <h2 className="tech-support-header-two">Really F'n Fast</h2>
        <p className="tech-support-paragraph">
          Our team has pretty much seen it all. From mini-splits to chillers weare
          here to help.
        </p>

        <LottieLoop3 anii={techlottie}/>

        <img
          className="tech-support-image"
          src={techSupports}
          alt="tech-supports"
        />
      </div>
      
      <div className="tech-support-desktop">
        <div className="tech-support-img-text">
          <h2 className="tech-support-header">
            Real Support <br /> From Real Techs
          </h2>
          <h2 className="tech-support-header-two">Really F'n Fast</h2>
          <p className="tech-support-paragraph">
            Our team has pretty much seen it all. From mini-splits to chillers weare
            here to help.
          </p>
    
          
    
          <img
            className="tech-support-image"
            src={techSupports}
            alt="tech-supports"
          />
          </div>
        <LottieLoop3 anii={techlottie}/>
      </div>
    </div>
  );
};

export default TechSupport;
