import React from 'react'
import Section from '../components/Section'
import './_privacy.scss'
const Privacy = () => {
  return (
    <div className='privacy'>
      <div className='privacy-content'>
        <div className='privacy-content-header'>
          <h2>Mobile App Terms of Uses </h2>
          <p> Bluon, Inc</p>
        </div>
        <div className='privacy-content-section-wrapper'>
          <Section type="privacy"></Section>
        </div>
      </div>

    </div>
  )
}

export default Privacy