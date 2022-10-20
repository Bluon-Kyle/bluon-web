import React from "react";
import video1 from "../../assets/video/BluonLive-Video.mp4";
import { Link } from "react-router-dom";
import ButtonNav from '../../components/common/ButtonNav/ButtonNav'
import arrow from '../../assets/icons/arrow.svg'

const DistrubutorsIndex = () => {
  const map = require("./map1.png");
  return (
    <div className="distributors">
      <div className="distributors-top">
        <div className="distributors-top-text">
          <h2>Ultimate Tool for Counter Staff</h2>
          <p>Unleash new-found productivity for your team</p>
        </div>
        <div className="distributors-top-video">
          <video
            className="dist-vid"
            autoPlay
            playsInline
            muted
            loop
            src={video1}
          ></video>
        </div>
      </div>
      <div className="distributors-divider"></div>
      <div className="distributors-partners">
        <div className="distributors-partners-text">
          <h2>Select Partners</h2>
          <div className="distributors-partners-logos">

          </div>
          <ButtonNav to='BluonLiveStores' color='primary'/>
        </div>

        <div className="distributors-partners-logos"></div>
      </div>

      <div className="distributors-bluon-live">
        <div className="distributors-bluon-live-demo"></div>
        <div className="distributors-bluon-live-demo-search"></div>
      </div>

      <div className="distributors-impact bg-img-eclipse">
        <div className="distributors-impact-text">
          <p>The Bluon Impact</p>
          <h2>
            1000+ <br></br>Distributors on the<br></br> BluonLive Network
          </h2>
          <h3>What are you waiting for?</h3>
        </div>

        <div className="distributors-impact-map">
          <img
            className="distributors-impact-map-img"
            src={map}
            alt="bluon live map"
          ></img>
        </div>
      </div>

      <div className="distributors-bottom">
        <div className="distributors-bottom-video-text">
          <p>BluonLive</p>
          <h2>Bluon Empowers Local Relationships</h2>
        </div>
        <div className="distributors-bottom-video-vid-wrapper">
          <iframe
            className="dist-vid"
            src="https://www.youtube.com/embed/5D0K00zhZ2k"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            width='100%'
            height='230vw'
          />
        </div>
        <div className="distributors-bottom-video-demo-button">
          <ButtonNav to='RequestDemo' color='primary'>
            Get a Demo <img alt='arrow' src={arrow}/>
          </ButtonNav>
        </div>
      </div>
    </div>
  );
};

export default DistrubutorsIndex;
