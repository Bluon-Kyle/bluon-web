import React from 'react'
import HeadshotBio from '../../../../components/common/headshots/HeadshotBio'


const ManagementListRender = ({items:{picSrc,picAlt,name,bio,contact,position,tel,email}}) => {
    // const src = props.items.picSrc; 
    // const alt = props.items.picAlt; 
    // const name = props.items.name; 
    // const position= props.items.position; 
    // const bio = props.items.bio;
    // const contact = props.items.contact; //if true, will add contact info 
    // const tel = props.items.tel; 
    // const email = props.items.email; 
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

export default ManagementListRender