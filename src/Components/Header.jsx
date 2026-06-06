import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Solar System Logo" className="logo" />
        <nav className="nav-bar"></nav>
      </header>
    </div>
  );
};

export default Header;
