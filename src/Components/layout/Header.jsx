import React, { useState } from "react";
import IconTheme from "./SetupTheme";
import { Link } from "react-router-dom";

import LogoLink from "../commons/Logo";
import DropDown from "./Dropdown";
import ActionSign from "./ActionsSign";
import ArrowDown from "../assets/icon/arrow-down.svg";
import More from "../assets/icon/more.svg";
import Exit from "../assets/icon/exit.svg";

function NavbarItem({ link, name, hasDropdown = false }) {
  return (
    <li className="navbar__item">
      <Link to={link} className="navbar__link">
        {name}
        {hasDropdown && (
          <img src={ArrowDown} alt="" className="icon navbar__arrow" />
        )}
      </Link>
      {hasDropdown && <DropDown />}
    </li>
  );
}
function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const navItems = [
    { name: "Trang chủ", hasDropdown: false, link: "/" },
    { name: "Sản Phẩm", hasDropdown: true, link: "/motifiProduct" },
    { name: "Dịch vụ", hasDropdown: false, link: "#!" },
    { name: "Liên hệ", hasDropdown: false, link: "/contact" },
  ];
  return (
    <>
      <button
        className="top-bar__more d-none d-lg-block"
        onClick={toggleNavbar}
      >
        <img src={More} alt="" className="icon top-bar__more-icon" />
      </button>
      <nav id="navbar" className={`navbar ${isNavbarVisible ? "show" : ""}`}>
        <button className="navbar__close-btn" onClick={toggleNavbar}>
          <img className="icon" src={Exit} alt="" />
        </button>
        <ul className="navbar__list js-dropdown-list">
          {navItems.map((item, index) => (
            <NavbarItem
              key={index}
              link={item.link}
              name={item.name}
              hasDropdown={item.hasDropdown}
            />
          ))}
        </ul>
      </nav>
    </>
  );
}
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="top-bar">
          <LogoLink
            className="top-bar__logo"
            imgClassName="top-bar__logo-img"
          />
          <Navbar />
          <ActionSign />
          <IconTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
