import React from "react";
import ButtonImage from "../../../../components/common/ButtonImage/ButtonImage";
import iPhoneImage from "../../../../assets/images/buttons/download-iphone.png";
import androidImage from "../../../../assets/images/buttons/download-samsung.png";

import { iPhoneHref } from "../../../../data/hrefs";
import { androidHref } from "../../../../data/hrefs";

const AppleReviews = () => {
  return (
    <div>
      <div>
        <h2>The Most Loved App</h2>
        <p>This is the real deal</p>
      </div>

      <div>
        <h2>{`"Bluon is the best app that you can possibly get."`}</h2>
        <p>Chris Rice</p>
        <img alt="5-stars" />
      </div>
      <img alt="ratings" />

      {/* Apple Reviews */}
      <div></div>

      <div>
        <img alt="bluon-app-logo" />
        <h2>Join the Bluon Community</h2>
        <div>
          <ButtonImage href={iPhoneHref} src={iPhoneImage} />
          <ButtonImage href={androidHref} src={androidImage} />
        </div>
      </div>
    </div>
  );
};

export default AppleReviews;
