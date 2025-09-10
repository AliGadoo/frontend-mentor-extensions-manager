import React from "react";
import mainLogo from "/src/assets/images/logo.svg";
import moonIcon from "/src/assets/images/icon-moon.svg";

const Navbar = () => {
  return (
    <nav className="nav_bar">
        <img className="logo_svg" src={mainLogo} alt="Logo" />
        <div className="change_theme_btn">
            <img src={moonIcon} alt="Dark/Light theme" />
        </div>
    </nav>
  );
};

export default Navbar;
