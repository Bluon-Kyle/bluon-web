import React, { useRef } from 'react'
//import HeadshotBio from '../../components/common/headshots/HeadshotBio';
import Join from '../../components/common/join/Join';
import Management from './components/management/Management';
import Sales from './components/sales/Sales';
import Tech from './components/tech/Tech';
import Ops from './components/ops-finance/Ops';
import Dev from './components/softwaredev/Dev';
import Platform from './components/platform/Platform';
import Board from './components/board/Board';
//import ScrollSection from '../../components/common/scroll/ScrollSection';
import ScrollIntoView from 'react-scroll-into-view';
const AboutUs = () => {
  const ref = useRef(null);
  const refClick = () => {
    ref.current?.scrollIntoView()
  }
  return (
    <div className='about'>
      
      <div className='about-values'>
        <div className='about-values-text'>
          <p>About Us </p>
          <h1>Our Values</h1>
        </div>
        <div className='about-values-img1'>
            <img className='values-img' alt='our values' src={require('./images/values.jpg')}/> 
        </div>
        <div className='about-values-img2'>
            <img className='team-img' alt='our team' src={require('./images/bluon-team.jpg')}/>
        </div>
      </div>

      <div className='about-core'>
        <div className='about-core-scroller'>
          <button onClick={refClick}>TESTER!!!!!!</button>
          <ScrollIntoView selector='.about-core-board'>
            <button>second tesrt!!!!!</button>
          </ScrollIntoView>
        </div>
        <div className='about-core-text'>
          <p>Our Team</p>
          <h1>The Core Of Bluon</h1>
        </div>
        <div className='about-core-nav'>

        </div>
        <div className='about-core-management'>
          <div className='about-core-management-text'>
            <h1>Management</h1>
            <p>A truly unique group of innovators and critical thinkers with complimentary skills.</p>
          </div>
          <Management></Management>
        </div>
        <div className='about-core-sales-marketing'>
          <h1>Sales & Marketing</h1>
          <p>Redefining how a sales team operates with a collaborative culture and approach.</p>
          <Sales></Sales>
        </div>
        <div className='about-core-technicians'>
          <h1>Technicians</h1>
          <p>A truly amazing group of best-in-class technicians dedicated to serving their peers and helping the trade.</p>
          <Tech></Tech>
        </div>
        <div className='about-core-ops'>
          <div className='about-core-ops-text'>
            <h1>Ops & Finance</h1>
            <p>The group that makes everything and everyone work!</p>
          </div>
          <Ops/>
        </div>
        <div className='about-core-dev'>
          <div className='about-core-dev-text'>
            <h1>Software Development</h1>
            <p>A highly adaptable, innovative group of product managers, UX designers and Software engineers</p>
          </div>
          <Dev></Dev>
        </div>
        <div ref={ref} className='about-core-platform'>
          <div className='about-core-platform-text'>
            <h1>Platform</h1>
            <p>The front line of Bluon! There is no better group of Ambassadors to the Bluon product and brand!</p>
          </div>
          <Platform/>
        </div>
        <div className='about-core-board'>
          <div className='about-core-board-text'>
            <h1>Board of Directors</h1>
          </div>
          <Board/>
        </div>
      </div>
      
      
      <Join button={true}></Join>
    </div>
  )
}

export default AboutUs