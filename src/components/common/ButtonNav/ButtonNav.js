import React from "react";
import { Link } from "react-router-dom";
import "./_buttonNav.scss";

const ButtonNav = ({ to, color, children }) => {
  return (
    <div className="button-nav">
      <Link className={`button-nav-link ${color}`} to={to}>
        {children}
      </Link>
    </div>
  );
};

export default ButtonNav;
