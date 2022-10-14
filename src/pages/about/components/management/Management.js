import React from 'react'
import { managementList } from './managementList';
import ManagementListRender from './ManagementListRender';
import './_management.scss'
const Management = () => {

    return(
        <div className='management-component'>
            {managementList.map((menu, index) => {
                return(
                <ManagementListRender items={menu} key={index} />
                )
            })}
        </div>
    )
}

export default Management