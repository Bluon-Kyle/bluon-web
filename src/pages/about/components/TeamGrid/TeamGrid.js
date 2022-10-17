import React from "react";
import HeadshotBio from "../../../../components/common/HeadshotBio/HeadshotBio";

import "./_teamGrid.scss";

const TeamGrid = ({ title, description, headshots, columns }) => {
  const renderHeadShots = () => {
    return headshots.map((headshots, i) => {
      return <HeadshotBio key={i} {...headshots} />;
    });
  };

  return (
    <div className="team-grid">
      <div className="team-grid-header">
        <h2 className="team-grid-header-title">{title}</h2>
        <p className="team-grid-header-description">{description}</p>
      </div>

      <div className={`team-grid-columns-${columns}`}>{renderHeadShots()}</div>
    </div>
  );
};

export default TeamGrid;
