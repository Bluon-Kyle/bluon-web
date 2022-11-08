import React, { useState } from "react";
import { dropdownList } from "../../../../data/app/dropdownList";
import Collapsible from "./components/Collapsible/Collapsible";

import "./_lottiePlayers.scss";

const LottiePlayers = () => {
  const [selected, setSelected] = useState(null);

  const renderLottiePlayers = () => {
    return dropdownList.map((dropdown, i) => {
      return (
        <li key={i}>
          <Collapsible
            selected={selected}
            setSelected={setSelected}
            index={i}
            {...dropdown}
          />
        </li>
      );
    });
  };

  return (
    <div className="lottie-players">
      <div className="lottie-players-header">
        <h2 className="lottie-players-header-heading">
          Homebase for HVAC Techs
        </h2>
        <p className="lottie-players-header-paragraph">
          We created the Bluon App specifically for HVAC technicians to make
          day-to-day life easier, and to connect with local suppliers.
        </p>
      </div>

      {/* list of lottie players */}
      <ul className="lottie-players-list">{renderLottiePlayers()}</ul>
    </div>
  );
};

export default LottiePlayers;
