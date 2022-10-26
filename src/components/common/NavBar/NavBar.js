import React from 'react'
import NavItemRender from './NavItemRender';
import { navItems } from './NavItems'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './_navbar.scss'
//import { Route } from 'react-router-dom';
const NavBar = (primary) => {
  const [isApp, setIsApp] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setIsApp(location.pathname === "/App");
  }, [location]);
  const getColor = () => {
    return isApp ? '-white' : '';
  };
  return (
    <nav>
      <ul className={`nav-menu${getColor()}`}>
        {navItems.map((menu, index) => {
          return(
            <NavItemRender items={menu} key={index}/>
          )
        })}
      </ul>
  
    </nav>
  );
};

export default NavBar