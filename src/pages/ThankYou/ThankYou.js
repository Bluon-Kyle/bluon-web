import React from "react";
import ButtonNav from "../../components/common/ButtonNav/ButtonNav";

import "./_thankYou.scss";

const ThankYou = () => {

  return (
    <div className="thank-you-container">
      <div className="thank-you">
        <h2 className="thank-you-title">Thank You</h2>
        <p className="thank-you-message">Your message has been sent!</p>
        <div className="thank-you-button">
          <ButtonNav to={"/"} color="primary">Back to Home</ButtonNav>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
