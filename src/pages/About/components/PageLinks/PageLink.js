import React from 'react'
import ScrollToSection from '../../../../components/common/scroll/ScrollToSection'
import './_pagelink.scss'
const PageLink = () => {
  
    return (
    <div className='page-link'>
        <div className='page-link-desktop'>
            <ScrollToSection id="team-id-Management" label='Management'/>
            <ScrollToSection id="team-id-Sales&Marketing" label='Sales & Marketing'/>
            <ScrollToSection id="team-id-Technicians" label='Technicians'/>
            <ScrollToSection id="team-id-Ops&Finance" label='Ops & Finance'/>
            <ScrollToSection id="team-id-SoftwareDevelopment" label='Development'/>
            <ScrollToSection id="team-id-Platform" label='Platform'/>
            <ScrollToSection id="team-id-BoardofDirectors" label='Board of Directors'/>
        </div>
    </div>
  )
}

export default PageLink