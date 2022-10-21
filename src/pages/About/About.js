import React from "react";
import JoinBanner from "../../components/common/JoinBanner/JoinBanner";
import Carousel from "./components/Carousel/Carousel";
import { carouselCards } from "../../data/about/carouselCards";
import TeamGrid from "./components/TeamGrid/TeamGrid";
import { teamGridList } from "../../data/about/teamGridList";
import bluonTeamImage from "../../assets/images/about/bluon-team.jpg";

const About = () => {
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
        <Carousel srcList={carouselCards} />
        <div className="about-values-img2">
          <img className="team-img" alt="our team" src={bluonTeamImage} />
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
