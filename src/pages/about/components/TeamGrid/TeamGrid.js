import React from "react";
import HeadshotBio from "../../../../components/common/headshots/HeadshotBio";

import "./_teamGrid.scss";

const TeamGrid = ({ title, description, headshots, columns }) => {
  const renderHeadShots = () => {
    return headshots.map((headshots) => {
      return <HeadshotBio {...headshots} />;
    });
  };

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>

      <div className={`team-grid-${columns}`}>{renderHeadShots()}</div>
    </div>
  );
};

export default TeamGrid;
