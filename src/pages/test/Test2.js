import React from 'react'
import lottie from 'lottie-web';
import ani from './lottiejson.json';
import { useEffect } from 'react';
//import { useLottieInteractivity } from 'lottie-react';
const Test2 = () => {
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
      animationData: ani
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div className="test">
      
       <div className="animation-container" style={{position:'fixed'}} ref={animationContainer}>
         <div>Test</div>

       </div>
     </div>

  )
}

export default Test2