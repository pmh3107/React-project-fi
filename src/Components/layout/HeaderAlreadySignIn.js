import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconTheme from "./SetupTheme";
import LogoLink from "../commons/Logo";
import DropDown from "./Dropdown";

import ArrowDown from "../assets/icon/arrow-down.svg";
import More from "../assets/icon/more.svg";
import Exit from "../assets/icon/exit.svg";
import IconSearch from "../assets/icon/search.svg";
import IconHeart from "../assets/icon/heart.svg";
import IconCar from "../assets/icon/buy.svg";
import Avatar from "../assets/avatar/avatar-1.png";

function AlreadySingIn() {
  return (
    <>
      <div className="top-act">
        <div className="top-act__group d-md-none top-act__group--single">
          <button className="top-act__btn">
            <img src={IconSearch} alt="" className="icon top-act__icon" />
          </button>
        </div>
        <div className="top-act__group d-md-none">
          <button className="top-act__btn">
            <img src={IconHeart} alt="" className="icon top-act__icon" />
            <span className="top-act__title">03</span>
          </button>
          <div className="top-act__separate" />
          <button className="top-act__btn">
            <img src={IconCar} alt="" className="icon top-act__icon" />
            <span className="top-act__title" />
          </button>
        </div>
        <div className="top-act__user">
          <img src={Avatar} alt="" className="top-act__avatar" />
        </div>
      </div>
    </>
  );
}
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
    { name: "Sản Phẩm", hasDropdown: true, link: "#!" },
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
          <AlreadySingIn />
          <IconTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
