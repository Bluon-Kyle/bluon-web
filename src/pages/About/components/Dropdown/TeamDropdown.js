import React from 'react'
import ScrollToSection from '../../../../components/common/scroll/ScrollToSection';
import './_teamdropdown.scss'
import Luminance from '../../../../assets/animations/text/luminance2/Luminance';
const TeamDropdown = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false); 
    }
  
    return (
      <div className="team-dropdown">
        <div className='team-dropdown-box' onClick={handleOpen}>
            {/* <h3 className='border-image-clip-path'>Select a Team</h3> */}
            <Luminance text="Select a Team"/>
        </div>
        {open ? (
          <ul className="team-menu">
            <li className="team-menu-item" key='1' onClick={handleClose}>
                <ScrollToSection id="team-id-Management" label='Management'/>
            </li>
            <li className="team-menu-item" key='2' onClick={handleClose}>
                <ScrollToSection id="team-id-Sales&Marketing" label='Sales & Marketing'/>
            </li>
            <li key='3' className="team-menu-item" onClick={handleClose}>
                <ScrollToSection id="team-id-Technicians" label='Technicians'/>
            </li>
            <li key='4' className="team-menu-item" onClick={handleClose}>
                <ScrollToSection id="team-id-Ops&Finance" label='Ops & Finance'/>
            </li>
            <li key='5' className="team-menu-item" onClick={handleClose}>
                <ScrollToSection id="team-id-SoftwareDevelopment" label='Development'/>
            </li>
            <li className="team-menu-item" key='6' onClick={handleClose}>
                <ScrollToSection id="team-id-Platform" label='Platform'/>
            </li>
            <li key='7' className="team-menu-item" onClick={handleClose}>
                <ScrollToSection id="team-id-BoardofDirectors" label='Board of Directors'/>
            </li>
          </ul>
        ) : null}
        {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
      </div>
    );
}

export default TeamDropdown