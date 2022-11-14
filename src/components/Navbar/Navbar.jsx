import { useState } from "react";
import NavSearch from "../NavSearch";
import { Outlet, Link, NavLink } from "react-router-dom";

function Navbar({ setNavSearchSearching }) {
  const [hamburger, setHamburger] = useState(false);

  function toggleMenu() {
    setHamburger((hamburger) => !hamburger);
  }

  const searchStyles = {
    backgroundColor: "var(--main-bg-color)",
    color: "var(--main-text-color-dark)",
  };

  let stateCheck = hamburger ? "active" : "";

  let activeStyle = {
    color: "var(--accent-pink)",
  };

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
                FAQ
              </NavLink>
            </li>

            {/* <NavSearch /> */}

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

export default Navbar;
