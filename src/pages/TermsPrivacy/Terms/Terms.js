import React from 'react'
import Section from '../components/Section'
import './_terms.scss'
const Terms = () => {
  return (
    <div className='terms'>
      <div className='terms-content'>
        <div className='terms-content-header'>
          <h2>Mobile App<br></br>Terms of Uses </h2>
          <p> Bluon, Inc</p>
        </div>
        <div className='terms-content-section-wrapper'>
          <Section type="terms"></Section>
        </div>
      </div>

    </div>
  )
}

export default Terms