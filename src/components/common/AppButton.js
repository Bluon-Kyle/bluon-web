import React from 'react'

const AppButton = (props) => {
    //depending on prop this will display iphone or andriod button
    const type = props.type; 
    const iphone = require('../../media/image/DownloadiPhone.png');
    const andriod = require('../../media/image/DownloadSamsung.png');
  return (
    type === 'ios' ? 
        <a className='app-link' href="https://apps.apple.com/us/app/bluon-hvac/id1357521880">
        <img className='app-link-img' alt='ios button' src={iphone} width="220" loading="lazy"/></a> :
        <a className='app-link' href="https://play.google.com/store/apps/details?id=com.bluon">
            <img className='app-link-img' alt='andriod button' src={andriod} width='220' loading="lazy"/>
        </a>
  )
}

export default AppButton