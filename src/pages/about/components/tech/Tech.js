import React from 'react'
import { techList } from './techList';
import TechListRender from './TechListRender';
import './_tech.scss'
const Tech = () => {

    return(
        <div className='tech-component'>
            {techList.map((menu, index) => {
                return(
                <TechListRender items={menu} key={index} />
                )
            })}
        </div>
    )
}

export default Tech