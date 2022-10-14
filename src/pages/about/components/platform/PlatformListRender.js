import React from 'react'
import HeadshotBio from '../../../../components/common/headshots/HeadshotBio'


const DevListRender = ({items:{picSrc,picAlt,name,bio,contact,position,tel,email}}) => {

  return (
    <HeadshotBio
            picSrc={picSrc}
            picAlt={picAlt}
            name={name}
            position={position}
            bio={bio}
            contact={contact}
            tel={tel}
            email={email}

    />
    
  )
}

export default DevListRender