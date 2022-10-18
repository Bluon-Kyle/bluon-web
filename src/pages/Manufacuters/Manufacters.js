import React from "react";
import "./_manufacturers.scss";
import manufacturersWide from "../../assets/images/manufacturer-wide.jpg";
import ButtonLink from "../../components/common/ButtonLink/ButtonLink";
const Manufacturers = () => {
  return (
    <div className="manufacturer">
      <div className="manufacturer-banner">
        <h2>Manufacturers</h2>
        <h4>
          To learn more about how to get your equipment and/or parts onto the
          Bluon platform contact us below.
        </h4>
        <ButtonLink color="primary">Contact Us</ButtonLink>
      </div>

      <div className="manufacturer-img">
        <img src={manufacturersWide} alt="parts" />
      </div>
    </div>
  );
};

export default Manufacturers;
