import React from "react";

import { NavLink } from "react-router-dom";

const InnerNavTab = ({ page, routeName }) => {
  return (
    <NavLink to={routeName} className="inner-nav-link">
      {page}
    </NavLink>
  );
};

export default InnerNavTab;
