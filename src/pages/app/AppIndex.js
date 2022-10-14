import React from 'react'
import AppButton from '../../components/common/AppButton';
import MostLovedApp from '../../components/common/most-loved-app/MostLovedApp';
const AppIndex = () => {
  //images import
  const app_badge = require('./badge-app.png'); 
  const app_examples = require('./app-phone.png');
  const app_techs = require('./Techs.png');
  const app_join = require('./join-movement-img.jpg');
  return (
    <div className='app'>

      <div className='app-top'>
        <h1>The App HVAC Techs<br></br> Actually Use</h1>
        {/* <img src='./bg-app-header.jpg'></img> */}
        <div className='app-top-btn-wrapper'>
          <AppButton className='app-top-btn' type='ios'/>
          <AppButton className='app-top-btn' type='andriod'/>
          <img className='app-top-badge' alt="its free!" src={app_badge} />
        </div>
        
        <div className='app-top-content'>
          <img className='app-top-content-img' alt="app examples" src={app_examples} />
        </div>
      </div>

      <div className='app-homebase'>
        <div className='app-homebase-text-wrapper'>
          <h1>Homebase for HVAC Techs</h1>
          <p>We created the Bluon App specifically for HVAC technicians to make
            day-to-day life easier and to<br></br> connect with local suppliers. 
          </p>
        </div>
        <div className='app-homebase-accordion'>
          CONTENT FILLER 
        
        </div>
      </div>

      <div className='app-support bg-img-eclipse'>
        <div className='app-support-spacer'>
          <div className='app-support-text-wrapper'>
            <h1> Real Support<br></br>From Real Techs.</h1>
            <h1 className='app-support-blue-h1'>Really F'n Fast.</h1>
            <p>Our team has seen it all. From mini-spits<br></br>to chillers, we are here to help!</p>
          </div>
        </div>
        <div className='app-support-image'>
            <img className='app-support-image-techs' alt="check out our techs!" src={app_techs}/>
        </div>

      </div>

      <div className='app-youtube'>
        {/* <video className='home-video' autoPlay playsInline muted loop src={video1}></video> */}
        <iframe className='app-youtube-video1' 
          src={"https://www.youtube.com/embed/MXwlOi6YfXU"} 
          title="The HVAC App That Will Change Your Life"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          >

        </iframe>

      </div>

      <div className='app-testimonials'>
          <MostLovedApp/>
      </div>


      
      <div className='app-community'>
        <div className='app-community-text'>
          <div className='app-community-text-wrapper'>
            <h1>Join the Bluon<br></br>Community</h1>
            <p>Dedicated to making the lives of HVAC techs<br></br>better.</p>
          </div>
          <div className='app-community-links'>
              <AppButton className='app-link-btn' type='ios'/>
              <AppButton className='app-link-btn' type='android'/>
          </div>
        </div>
        <img className='app-community-img'  alt="app examples" src={app_join}/>
      </div>
    </div>
  )
}

export default AppIndex