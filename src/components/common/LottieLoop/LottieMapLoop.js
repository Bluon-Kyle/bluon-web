import React from 'react'
import lottie from 'lottie-web';
//import ani from '../../../data/lottie/lottiejson.json';
import { useEffect } from 'react';
import './_maplottieloop.scss';
const LottieMapLoop = (props) => {
    const anii = props.anii; 
      let animationContainer = React.createRef(); 
  //const json = url('https://assets6.lottiefiles.com/packages/lf20_agbnhoz0.json');
  lottie.loadAnimation({
    container: animationContainer.current, 
    renderer:'svg',
    loop:true,
    autoplay:true 
  })
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: anii
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div className="lottie-loop4">
      
       <div className="animation-container" ref={animationContainer}>
         

       </div>
     </div>

  )
}

export default LottieMapLoop