import "./Navbar.css";
import Logo from "../images/logo.png";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/">
          <img
            className="logo"
            src={Logo}
            alt=""
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </Link>
        <ul className={`nav_links ${isNavOpen ? "show_nav" : "hide_nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  to={path}
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
