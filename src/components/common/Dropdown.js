import React from 'react'
import './_dropdown.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Dropdown = ({submenus, dropdown}) => {
  const [isApp, setIsApp] = useState(false);
  const [isAds, setIsAds] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setIsApp(location.pathname === "/App");
    setIsAds(location.pathname == '/HVAC-APP-LP3');
  }, [location]);
  const getColor = () => {
    return isApp || isAds ? '-white' : '';
  };
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
    {submenus.map((submenu, index) => (
      
        <li key={index} className={`menu-items${getColor()}`}>
          <a href={submenu.url}>{submenu.title}</a>
          <br></br><br></br>
        </li>

      
    ))}
  </ul>
  )
}

export default Dropdown