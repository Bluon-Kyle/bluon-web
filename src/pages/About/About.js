import React from "react";
//import HeadshotBio from '../../components/common/headshots/HeadshotBio';
import JoinBanner from "../../components/common/JoinBanner/JoinBanner";
//import ScrollSection from '../../components/common/scroll/ScrollSection';
//import ScrollIntoView from "react-scroll-into-view";
import Carousel from "./components/Carousel/Carousel";
import { carouselCards } from "./data/carouselCards";
import TeamGrid from "./components/TeamGrid/TeamGrid";
// import { softwareDevList } from "./data/headshots/softwareDevList";
// import { managementList } from "./data/headshots/managementList";
// import { salesList } from "./data/headshots/salesList";
// import { platformList } from "./data/headshots/platformList";
// import { opsList } from "./data/headshots/opsList";
// import { boardList } from "./data/headshots/boardList";
import { teamGridList } from "./data/teamGridList";
//import { Link } from "react-router-dom";
//import ExternalButton from "../../components/common/ButtonLink/ButtonLink";

const About = () => {
  // const ref = useRef(null);
  // const refClick = () => {
  //   ref.current?.scrollIntoView();
  // };
  const renderTeamGrids = () => {
    return teamGridList.map((teamGrid, i) => {
      return <TeamGrid key={i} {...teamGrid} />;
    });
  };

  return (
    <div className="about">
      <div className="about-values">
        <div className="about-values-text">
          <p>About Us</p>
          <h1>Our Values</h1>
        </div>
        {/* <div className='about-values-img1'>
            <img className='values-img' alt='our values' src={require('./images/values.jpg')}/> 
        </div> */}
        <Carousel srcList={carouselCards} />
        <div className="about-values-img2">
          <img
            className="team-img"
            alt="our team"
            src={require("./images/bluon-team.jpg")}
          />
        </div>
      </div>

      <div className="about-core">
        <div className="about-core-text">
          <p>Our Team</p>
          <h1>The Core Of Bluon</h1>
        </div>
        {renderTeamGrids()}
      </div>
      <JoinBanner title={"Join the Bluon Team"} />
    </div>
  );
};

export default About;
