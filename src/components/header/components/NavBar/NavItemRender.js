import React, { useState, useEffect, useRef } from 'react'
import Dropdown from '../../../common/Dropdown'
import { Link } from 'react-router-dom';
const NavItemRender = ({items}) => {
    const [dropdown, setDropdown] = useState(false); 
    let ref= useRef()

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

       const onMouseEnter = () => {
        //allow dropdown hover for biggger screens only 
        window.innerWidth > 960 && setDropdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
       };

  return (
    <li className="nav-menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {items.submenu ? (
          <>
            <button className="arrow" type="button" aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}>
              {items.title}{' '}
            </button>
            <Dropdown dropdown={dropdown} submenus={items.submenu} />
          </>
        ) : (
          <>
            <Link className="special-link-class" to={items.url} href={items.location}>{items.title}</Link>
          </>
        )}
      </li>
  )
}

export default NavItemRender
