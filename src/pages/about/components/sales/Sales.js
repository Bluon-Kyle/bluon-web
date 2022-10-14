import React from 'react'
import { salesList } from './salesList';
import SalesListRender from './SalesListRender';
import './_sales.scss'
const Management = () => {

    return(
        <div className='sales-component'>
            {salesList.map((menu, index) => {
                return(
                <SalesListRender items={menu} key={index} />
                )
            })}
        </div>
    )
}

export default Management