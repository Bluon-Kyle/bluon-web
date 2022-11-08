import React from "react";
import HeadshotBio from "../../../../components/common/HeadshotBio/HeadshotBio";

import "./_teamGrid.scss";

const TeamGrid = ({ title, description, headshots, columns }) => {
  const renderHeadShots = () => {
    return headshots.map((headshots, i) => {
      return <HeadshotBio key={i} {...headshots} />;
    });
  };
  const scrollid = title.replaceAll(' ', '');
  let size = ''; 
  if(title === 'Board of Directors'){
    size= '-5'
  }
  return (
    <div className="team-grid">
      <div className="team-grid-header" id={`team-id-${scrollid}`}>
        <h2 className="team-grid-header-title">{title}</h2>
        <p className="team-grid-header-description">{description}</p>
      </div>

      <div className={`team-grid-columns-${columns}${size}`}>{renderHeadShots()}</div>
    </div>
  );
};

export default TeamGrid;
