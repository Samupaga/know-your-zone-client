import { useState } from "react";
import NavSearch from "../NavSearch";
import { Outlet, NavLink, useLocation } from "react-router-dom";

function Navbar({ setNavSearchSearching }) {
  const [hamburger, setHamburger] = useState(false);

  function toggleMenu() {
    setHamburger((hamburger) => !hamburger);
  }

  let stateCheck = hamburger ? "active" : "";

  let activeStyle = {
    color: "var(--accent-pink-nav)",
  };

  const location = useLocation();
  const path = location.pathname;

  if (path === "/") {
    return (
      <>
        <header>
          <nav className="nav-bar" id="nav-bar">
            <NavLink to="/" className="logo">
              Know Your Zone
            </NavLink>

            <ul className={`nav-menu ${stateCheck}`}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  id="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/faq"
                  className="nav-link"
                  id="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About
                </NavLink>
              </li>
            </ul>

            <div className={`hamburger ${stateCheck}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>

        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <header>
          <nav className="nav-bar" id="nav-bar">
            <NavLink to="/" className="logo" href="">
              Know Your Zone
            </NavLink>

            <ul className={`nav-menu ${stateCheck}`}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  id="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/faq"
                  className="nav-link"
                  id="nav-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About
                </NavLink>
              </li>

              <NavSearch setNavSearchSearching={setNavSearchSearching} />
            </ul>

            <div className={`hamburger ${stateCheck}`} onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>

        <Outlet />
      </>
    );
  }
}

export default Navbar;
