import React from "react";
import mainLogo from "/images/logo.svg";
import moonIcon from "/images/icon-moon.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav_bar">
      <img className="logo_svg" src={mainLogo} alt="Logo" />
      <button className="change_theme_btn">
        <img src={moonIcon} alt="Dark/Light theme" />
      </button>
    </nav>
  );
};

export default Navbar;
