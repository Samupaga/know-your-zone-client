import { useState } from "react";
import NavSearch from "../NavSearch";

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
    <header>
      <nav className="nav-bar" id="nav-bar">
        <a className="logo" href="">
          Know Your Zone
        </a>

        <ul className={`nav-menu ${stateCheck}`}>
          <li className="nav-item">
            <a href="" className="nav-link active" id="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link" id="nav-link">
              FAQ
            </a>
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
  );
}

export default Navbar;
