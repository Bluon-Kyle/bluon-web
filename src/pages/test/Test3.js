import { LottieInteractivity } from "lottie-react";
import { LottiePlayer } from "lottie-react";
import React from 'react'

const Test3 = () => {
    LottieInteractivity.create({
        player: '#firstLottie',
        mode: 'scroll',
        actions: [
            {
                visibility:[0,1],
                type: 'seek',
                frames: [0, 300],
            },
        ]
    });
  return (
    <div>
        <lottie-player 
            id="firstLottie" 
            src="https://assets2.lottiefiles.com/packages/lf20_i9mxcD.json" 
            style="width:400px; height: 400px;">

            </lottie-player>
    </div>
  )
}

export default Test3