import React from 'react'
import { devList } from './devList';
import DevListRender from './DevListRender';
import './_dev.scss'
const Dev = () => {

    return(
        <div className='dev-component'>
            {devList.map((menu, index) => {
                return(
                <DevListRender items={menu} key={index} />
                )
            })}
        </div>
    )
}

export default Dev