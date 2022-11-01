import React from "react";
import "./_manufacturers.scss";
import manufacturersWide from "../../assets/images/manufacturer-wide.jpg";
import manuDesk from "../../assets/images/manufacturer-wider.jpg";
import ButtonNav from "../../components/common/ButtonNav/ButtonNav";
const Manufacturers = () => {
  return (
    <div className="manufacturer">
      <div className="manufacturer-banner">
        <h2>Manufacturers</h2>
        <h4>
          To learn more about how to get your equipment and/or parts onto the
          Bluon platform contact us below.
        </h4>
        <ButtonNav to='/Contact' color="primary">Contact Us</ButtonNav>
      </div>

      <div className="manufacturer-img">
        <img src={manufacturersWide} alt="parts" />
      </div>
      <div className="manufacturer-img-desk">
        <img src={manuDesk} alt="parts large" />
      </div>
    </div>
  );
};

export default Manufacturers;
