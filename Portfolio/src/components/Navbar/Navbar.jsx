import React, { useState } from "react";
import style from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = ({ data }) => {
  // data.navbar.map((item) => console.log(item.navName));
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={style.navbar}>
      <a href="/" className={style.title}>
        {data.portfolio}
      </a>
      <div className={style.menu}>
        <img
          className={style.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${style.menuItems} ${menuOpen && style.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          {data.navbar.map((item) => {
            return (
              <li key={item.id}>
                <a href={`#${item.navLink}`}>{item.navName}</a>
              </li>
            );
          })}
          {/* <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
