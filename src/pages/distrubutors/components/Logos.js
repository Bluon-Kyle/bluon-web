import React from 'react'
import logoList from './logoList'
import LogoRender from './LogoRender';
import './_logos.scss';
const Logos = () => {
    
        return( 
        <div className='dist-logos'>
            {logoList.map((logos, i) => {
                return (
                    <LogoRender logos={logos} index={i}/>    
                )
            })}
        </div>
        )
}

export default Logos