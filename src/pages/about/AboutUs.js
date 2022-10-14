import React, { useRef } from "react";
//import HeadshotBio from '../../components/common/headshots/HeadshotBio';
import Join from "../../components/common/join/Join";

//import ScrollSection from '../../components/common/scroll/ScrollSection';
import ScrollIntoView from "react-scroll-into-view";
import Carousel from "./components/Carousel/Carousel";
import { carouselCards } from "./data/carouselCards";
import TeamGrid from "./components/TeamGrid/TeamGrid";
import { softwareDevList } from "./data/headshots/softwareDevList";
import { managementList } from "./data/headshots/managementList";
import { salesList } from "./data/headshots/salesList";
import { platformList } from "./data/headshots/platformList";
import { opsList } from "./data/headshots/opsList";
import { boardList } from "./data/headshots/boardList";

const AboutUs = () => {
  const ref = useRef(null);
  const refClick = () => {
    ref.current?.scrollIntoView();
  };

  return (
    <div className="about">
      <div className="about-values">
        <div className="about-values-text">
          <p>About Us </p>
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
        <div className="about-core-nav"></div>

        <TeamGrid
          title="Management"
          description="A truly unique group of innovators and critical thinkers with complimentary skills"
          headshots={managementList}
          columns={2}
        />

        <TeamGrid
          title="Sales and Marketing"
          description="Redefining how a sales team operates with a collaborative culture and approach"
          headshots={salesList}
          columns={2}
        />

        <TeamGrid
          title="Technicians"
          description="A truly amazing group of best-in-class technicians dedicated to serving their peers and helping the trade"
          headshots={salesList}
          columns={2}
        />

        <TeamGrid
          title="Ops & Finance"
          description="The group that makes everything and everyone work!"
          headshots={opsList}
          columns={2}
        />

        <TeamGrid
          title="Software Development"
          description="A highly adaptable, innovative group of product managers, UX desigers and software engineers"
          headshots={softwareDevList}
          columns={2}
        />

        <TeamGrid
          title="Platform"
          description="The front line of Bluon! There is no better group of Ambassadors to the Bluon product and brand!"
          headshots={platformList}
          columns={2}
        />

        <TeamGrid
          title="Board of Directors"
          description=""
          headshots={boardList}
          columns={2}
        />
      </div>
      <Join button={true}></Join>
    </div>
  );
};

export default AboutUs;
