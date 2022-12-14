import React from "react";
import "./_manufacturers.scss";
import manufacturersWide from "../../assets/images/manufacturer-wide.jpg";
import manuDesk from "../../assets/images/manufacturer-wider.jpg";
import ButtonNav from "../../components/common/ButtonNav/ButtonNav";
import BorderDraw from "../../assets/animations/text/borderDraw/BorderDraw";
const Manufacturers = () => {
  return (
    <div className="manufacturer">
    {/* <metadata title='hvac manufacturers'/> */}
      <div className="manufacturer-banner">
        <h2><BorderDraw text='Manufacturers'/></h2>
        <h4>
          To learn more about how to get your equipment and/or parts onto the
          Bluon platform contact us below.
        </h4>
        <div className="manufacturer-banner-button">
          <ButtonNav to='/Contact' color="primary">Contact Us</ButtonNav>
        </div>
        
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
