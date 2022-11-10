import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const InnerNavTab = ({ page }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <NavLink className={isActive ? "inner-nav-clicked" : "inner-nav"} onClick={handleClick}>
      {page}
    </NavLink>
  );
};

export default InnerNavTab;

//  <NavLink className={isActive ? "inner-nav-clicked" : "inner-nav"} onClick={handleClick}>
