import React from 'react'
import lottie from 'lottie-web'
import ani from '../../../data/lottie/lottie-bluon-live.json'
import './_lottieloop.scss'
//import { useEffect } from 'react'
const LottieLoop = () => {
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
      //anim.destroy();
      //document.removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <div className="lottie-loop">
      
      <div className="animation-container" style={{position:'fixed'}} ref={lottieRef}>
        

      </div>
    </div>
  )
}

export default LottieLoop