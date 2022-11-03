import React from 'react'
import './_borderdraw.scss'
const BorderDraw = (props) => {
    const text = props.text; 
  return (
    <div className='text-border-draw'>
        <div class="patterns">
            <svg width="100%" height="100%">
                <defs>
                {/* <pattern 
                    id="polka-dots" 
                    x="0" y="0" 
                    width="100" height="100"
                    patternUnits="userSpaceOnUse">
                    <circle fill="blue" cx="25" cy="25" r="3"></circle>
                </pattern>   */}
                    {/* <style></style> */}
                
                </defs>
                        
                <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
                
                
            
            <text x="50%" y="100%"  text-anchor="middle"  >
            {text}
            </text>
            </svg>
        </div>
    </div>
  )
}

export default BorderDraw