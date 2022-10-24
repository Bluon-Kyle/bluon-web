import React from "react";
import video1 from "../../assets/video/BluonLive-Video.mp4";
import ButtonNav from "../../components/common/ButtonNav/ButtonNav";
import arrow from "../../assets/icons/arrow.svg";
import Logos from "./components/Logos";
import divider from '../../assets/images/distributors/Lineart-Blue.png'
import blive from '../../assets/images/distributors/BluonLive-Logo.svg'
import bsearch from '../../assets/images/distributors/BluonSearch-Logo.svg'
//lotties
import LottieLoop2 from "../../components/common/LottieLoop/LottieLoop2";
import anim1 from '../../data/lottie/lottiejson.json'
import anim2 from '../../data/lottie/lottie-bluon-search.json';
import "./_distributors.scss";

const Distrubutors = () => {
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
      <div className="distributors-divider">
        <img src={divider} alt='divider'/>
      </div>
      <div className="distributors-partners">
        <div className="distributors-partners-text">
          <h2>Select Partners</h2>
          <div className="distributors-partners-logos">
            <Logos />
          </div>
          <ButtonNav to="/BluonLiveStores" color="primary">
            See Local Distributors
          </ButtonNav>
        </div>
      </div>

      <div className="distributors-bluon-live">
        <div className="distributors-bluon-live-demo">
          <img className='img' src={blive} alt='bluon live makes your life easier'/>
          <h2>Receive Order Requests from Techs in the Field</h2>
          <ul>
            <li key='1'>See model, parts and cross references.</li>
            <li key='2'>Save hours of research and headache.</li>
          </ul>
          <LottieLoop2 anii={anim1}/>
          <div className='demo-button'>
            <ButtonNav to="/BluonLiveStores" color="primary">
              Get a demo
            </ButtonNav>
          </div>
        </div>

        <div className="distributors-bluon-live-demo-search">
          <img className='searchimg' src={bsearch} alt='bluon search'/>
          <h2>The Best Cross Reference Engine</h2>
          <ul>
            <li key='1'>Cross reference 100+ brands with over 3M parts</li>
            <li key='2'>See parts w/ specs & manuals for 300k model</li>
            <li key='3'>Unlimited access for all BluonLive distributors</li>
          </ul>
          <LottieLoop2 anii={anim2}/>
          <div className='demo-button'>
            <ButtonNav to="/BluonLiveStores" color="primary">
              Get a demo
            </ButtonNav>
          </div>
        </div>
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
            width="100%"
            height="230vw"
          />
        </div>
        <div className="distributors-bottom-video-demo-button">
          <ButtonNav to="RequestDemo" color="primary">
            Get a Demo <img alt="arrow" src={arrow} />
          </ButtonNav>
        </div>
      </div>
    </div>
  );
};

export default Distrubutors;
