import { useState } from "react";
import NavSearch from "../NavSearch";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  function toggleMenu() {
    setHamburger((hamburger) => !hamburger);
  }

  const searchStyles = {
    backgroundColor: "var(--main-bg-color)",
    color: "var(--main-text-color-dark)",
  };

  let stateCheck = hamburger ? "active" : "";

  return (
    <>
      <header>
        <nav className="nav-bar" id="nav-bar">
          <a className="logo" href="">
            Know Your Zone
          </a>

          <ul className={`nav-menu ${stateCheck}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link active" id="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/faq" className="nav-link" id="nav-link">
                FAQ
              </Link>
            </li>

            <NavSearch />
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
