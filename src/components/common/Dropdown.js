import React from 'react'
import './_dropdown.scss'
const Dropdown = ({submenus, dropdown}) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
    {submenus.map((submenu, index) => (
      
        <li key={index} className="menu-items">
          <a href={submenu.url}>{submenu.title}</a>
          <br></br><br></br>
        </li>

      
    ))}
  </ul>
  )
}

export default Dropdown