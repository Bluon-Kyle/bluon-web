import React from 'react'
import { opsList } from './opsList';
import OpsListRender from './OpsListRender';
import './_ops.scss'
const Ops = () => {

    return(
        <div className='ops-component'>
            {opsList.map((menu, index) => {
                return(
                <OpsListRender items={menu} key={index} />
                )
            })}
        </div>
    )
}

export default Ops