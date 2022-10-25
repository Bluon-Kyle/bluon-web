import lottie from "lottie-web";
import Lottie from 'lottie-react'
import React from "react";
//import { Ref, useRef } from "react";
import { useEffect } from "react";
import './_testStyles.scss'
//import json from 'https://assets6.lottiefiles.com/packages/lf20_agbnhoz0.json'
import ani from './lottiejson.json';
const TestPage = () => {
  //test1
  //let animationContainer = React.createRef(); 
  // lottie.loadAnimation({
  //   container: animationContainer.current, 
  //   renderer:'svg',
  //   loop:true,
  //   autoplay:true 
  // })
  // useEffect(() => {
  //   const anim = lottie.loadAnimation({
  //     container: animationContainer.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: ani
  //   });
  //   return () => anim.destroy(); // optional clean up for unmounting
  // }, []);

  //test2
  const lottieRef = React.useRef();

  React.useEffect(() => {
    var animDuration = 1000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: ani
    });

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }
    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <div className="test">
      
      <div className="animation-container" style={{position:'relative'}} ref={lottieRef}>
        <div>Test</div>

      </div>
    </div>
  )

  // return <div className="test"> TEST</div>

  //test3
  // const style = {
  //   height: 500,
  // };
  // const interactivity = {
  //   mode: "scroll",
  //   //duration:2000, 
  //   actions: [
  //     {
  //       visibility: [0, 0.2],
  //       type: "start",
  //       frames: [0],
  //     },
  //     {
  //       visibility: [0.2, 0.45],
  //       type: "seek",
  //       frames: [0, 300],
  //     },
  //     {
  //       visibility: [0.45, 1.0],
  //       type: "loop",
  //       frames: [300, 320],
  //     },
  //   ],
  // };
  

  //   return (
  //     <Lottie
  //       animationData={ani}
  //       style={style}
  //       interactivity={interactivity}
  //     />
  //   );
  
}

export default TestPage