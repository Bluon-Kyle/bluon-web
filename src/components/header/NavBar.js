import React from 'react'
import NavItemRender from './NavItemRender';
import { navItems } from './NavItems'
//import { Route } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <ul className='nav-menu'>
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