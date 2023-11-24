import React, { useState } from "react";
import IconTheme from "./SetupTheme";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import LogoLink from "../commons/Logo";
import DropDown from "./Dropdown";
import ActionSign from "./ActionsSign";
import ArrowDown from "../assets/icon/arrow-down.svg";
import More from "../assets/icon/more.svg";
import Exit from "../assets/icon/exit.svg";
import IconHeart from "../assets/icon/heart.svg";
import IconCar from "../assets/icon/buy.svg";
import Logout from "../assets/icon/logout.svg";
function AlreadySingIn({ onLogout }) {
  return (
    <>
      <div className="top-act">
        <Link to="/user" className="top-act__container">
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
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-uth-fi.appspot.com/o/web%2Fuser.png?alt=media&token=abcbe925-f321-44f4-805d-27931d8a7de7"
              alt=""
              className="top-act__avatar"
            />
          </div>
        </Link>
        <div className="top-atc">
          <button className="top-act__logout" onClick={onLogout}>
            <img src={Logout} alt="" />
          </button>
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
  const { isLoggedIn, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <header className="header">
      <div className="container">
        <div className="top-bar">
          <LogoLink
            className="top-bar__logo"
            imgClassName="top-bar__logo-img"
          />
          <Navbar />
          {isLoggedIn ? (
            <AlreadySingIn onLogout={handleLogout} />
          ) : (
            <ActionSign />
          )}
          <IconTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
