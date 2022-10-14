import React from 'react'
import { platformList } from './platformList';
import PlatformListRender from './PlatformListRender';
import './_platform.scss'
const Platform = () => {

    return(
        <div className='dev-component'>
            {platformList.map((menu, index) => {
                return(
                <PlatformListRender items={menu} key={index} />
                )
            })}
        </div>
    )
}

export default Platform