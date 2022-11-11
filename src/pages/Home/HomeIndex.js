import React, { useEffect, useState } from "react";
import video1 from "../../assets/video/BluonAnimation.mp4";
import { Link } from "react-router-dom";
import appImg from "./phone-one-app.png";
import ResponsiveCard from "../../components/common/cards/responsiveCardThree/ResponsiveCard";
import ButtonCard from "../../components/common/cards/buttonCard/ButtonCard";
import AppleReviews from "../App/components/AppleReviews/AppleReviews";
import JoinBluon from "../App/components/JoinBluon/JoinBluon";
import "./_home.scss";
// import LottieLoop3 from "../../components/common/LottieLoop/LottieLoop3";
import map from "../../data/lottie/map-new.json";
import video from "../../assets/video/BluonTechPortal.mp4";
import axios from "axios";
import bullet from '../../assets/icons/white-circle.svg'
import CountUpTest from "../../components/common/Counter/CountUpTest";
import LottieMapLoop from "../../components/common/LottieLoop/LottieMapLoop";
import bdot from '../../assets/icons/blue-circle.svg'
import ydot from '../../assets/icons/yellow-circle.svg'
const HomeIndex = () => {
  const [totalUsers, setTotalUsers] = useState();
  const [marketP, setMarketP] = useState();
  const [marketG, setMarketG] =useState();  
  useEffect(() => {

      const getTotalUsers = async () => {
    
        try{
          const result = await axios.get(
            "https://hubspot-backend-rrh95.ondigitalocean.app/totalUsers"
          )
          //console.log(result.data)
          setTotalUsers(result.data);
          setMarketG(3);
          setMarketP(49); 
        }
        catch(err){
          console.log("loading api", err.response.data.error)
        }
      };
      getTotalUsers();
    
    
    
  }, []);

  return (
    <div className="home">
      <div className="home-welcome-wrapper">
        <h1>
          Upgrading the HVAC Industry
        </h1>
        <div className="home-video-container">
          <video
            className="home-video"
            autoPlay
            playsInline
            muted
            loop
            src={video1}
          ></video>
        </div>
        {/* <div className='home-container-background'><br></br></div> */}
      </div>

      <div className="home-impact">
        <h1>The Bluon Impact</h1>

        <h2> The Largest HVAC Community on Earth</h2>
        <div className="home-impact-map-wrapper">
          <div className="map-and-legend">
            {/* <LottieLoop3 anii={map} /> */}
            <LottieMapLoop anii={map}/>
            <div className="home-impact-map-inner">
              
              <p className="p1">
                <img src={bdot} alt='techs'/> HVAC Technicians
              </p>
              <p className="p2">
                <img src={ydot} alt='techs'/> BluonLive Distributors
              </p>
            
            </div>
          </div>
          
          <div className="home-impact-counter">
            <div className="home-impact-counter-container">

              <div className="total-techs-counter">
                <CountUpTest
                  startnum={0}
                  endnum={totalUsers?.life}
                  duration={12}
                  comma=','
                  deci={0}
                  decimals={'.'}
                  prefix=''
                  suffix=''
                  label='HVAC Technicians'
                  name='users-total'
                />
              </div>

              <div className="added-today-counter">
                <CountUpTest
                    startnum={0}
                    endnum={totalUsers?.today}
                    duration={10}
                    comma=','
                    deci={0}
                    decimals={'.'}
                    prefix=''
                    suffix=''
                    label='added today'
                    name="users-today"
                    arrow={true}
                  />
              </div>

              <div className="pie-chart">
                <div className="pie-animation">
                  pie will go here
                </div>
              </div>

              <div className="market-percent">
                <CountUpTest
                      startnum={0}
                      endnum={marketP}
                      duration={10}
                      comma=','
                      deci={0}
                      decimals={'.'}
                      prefix=''
                      suffix='%'
                      label='of all technicians in the US are Bluon Technicians'
                      name="market-percent"
                  />
              </div>

              <div className="market-growth">
                  <CountUpTest
                        startnum={0}
                        endnum={marketG}
                        duration={6}
                        comma=','
                        deci={0}
                        decimals={'.'}
                        prefix=''
                        suffix='%'
                        label='market growth per month'
                        name="market-growth"
                        arrow={true}
                  />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="home-cards">
        <ResponsiveCard
          title1="For Distributors"
          img1={require("./ForDistributors.jpg")}
          text1="Transform your counter staff with a single tool to receive live orders from 100k+ Bluon Techs in the field."
          bottomtext1="Also gain access to the most comprehensive cross-reference search in the industry"
          buttonLink1="RequestDemo"
          buttonText1="Get a demo"
          title2="For Contractors"
          img2={require("./ForContractors.jpg")}
          text2="Empower your techs to get more jobs done. Bluon is a mobile support platform your techs will actually use."
          bottomtext2="Identify and order parts directly from your local suppliers - no more wrong parts or extra supply runs."
          buttonLink2="TechDemo"
          buttonText2="Learn more"
          title3="For Technicians"
          img3={require("./ForTechnicians.jpg")}
          text3="Join the largest community of HVAC techs and the only support platform to truly empower those in the trade."
          bottomtext3="Get access to 325k HVAC units with manuals, original parts lists and 24/7 tech support."
          buttonLink3="App"
          buttonText3="Get the Bluon app"
        />
      </div>

      <div className="home-app">
        <div className="home-app-text">
          <div className="outer">
            <h1 className="outer-title">One App for Every Job</h1>
          </div>
          <ul className="inner">
            <li>
              <img alt='bullet' src={bullet}/>
              Database of 300k HVAC units with manuals
            </li>
            <li>
              <img alt='bullet' src={bullet}/>
              Includes part #s and specs for most models
            </li>
            <li>
              <img alt='bullet' src={bullet}/>
              Order parts from local suppliers
            </li>
          </ul>
          <Link to={"/App"}>
            <button className="home-app-btn">
              <strong>Explore app</strong>
            </button>
          </Link>
        </div>
        <div className="home-app-img">
          <img alt="one app for every job" className="img" src={appImg} />
        </div>
      </div>

      <div className="home-mla-mobile">
        <AppleReviews />
        <JoinBluon />
        <div className="mla-video">
          <video
            className="video"
            autoPlay
            playsInline
            muted
            loop
            src={video}
          ></video>
        </div>
      </div>
      <div className="button-cards-wrapper">
        <div className="home-button-cards">
          <ButtonCard
            title="Distributors"
            img="dist"
            imgalt="Distributors"
            hover_title="Distributors"
            content="Bluon brings more buisness to distributors, fill out our form to learn more!"
            button_text="Get a demo"
            button_link="RequestDemo"
          ></ButtonCard>
          <ButtonCard
            title="Contractors"
            img="contr"
            imgalt="Contractors"
            hover_title="Contractors"
            content="Submit a form to learn more about Bluon for contractors"
            button_text="Learn More!"
            button_link="TechDemo"
          ></ButtonCard>
          <ButtonCard
            title="Technicians"
            img="tech"
            imgalt="Technicians"
            hover_title="Technicians"
            content="Check out the FREE Bluon app!"
            button_text="Get the Bluon App"
            button_link="App"
          ></ButtonCard>
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
