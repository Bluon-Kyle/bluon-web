import React, { useState, useRef } from "react";
import Dropdown from "../../../common/Dropdown";
import { NavLink } from "react-router-dom";
const HamMenuRender = ({ items, closeMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  //const [close, setClose] = useState(false);
  let ref = useRef();

  return (
    <li className="ham-menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button
            className="arrow"
            type="button"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown
            dropdown={dropdown}
            submenus={items.submenu}
            onClick={closeMenu}
          />
        </>
      ) : (
        <>
          <NavLink onClick={closeMenu} className="link" to={items.url}>
            {items.title}
          </NavLink>
        </>
      )}
    </li>
  );
};

export default HamMenuRender;
