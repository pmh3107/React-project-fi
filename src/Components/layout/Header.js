import React, { useState } from "react";
import "../../css/style.css";
import LogoLink from "../commons/Logo";
import DropDown from "./Dropdown";

import ArrowDown from "../assets/icon/arrow-down.svg";
import More from "../assets/icon/more.svg";
// import "../../js/scripts";

import Exit from "../assets/icon/exit.svg";

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <header class="header">
      <div className="container">
        <div className="top-bar">
          {/* More */}
          <button
            className="top-bar__more d-none d-lg-block js-toggle"
            onClick={toggleNavbar}
          >
            <img src={More} alt="" className="icon top-bar__more-icon" />
          </button>
          {/* Logo */}
          {/* <a href="./" className="logo top-bar__logo">
            <img
              src={Logo}
              alt="Xe lướt miền Trung"
              className="logo__img top-bar__logo-img"
            />
          </a> */}
          {/* Navbar */}
          <LogoLink
            className="top-bar__logo"
            imgClassName="top-bar__logo-img"
          />
          <nav
            id="navbar"
            className={`navbar ${isNavbarVisible ? "show" : ""}`}
          >
            <button className="navbar__close-btn" onClick={toggleNavbar}>
              <img className="icon" src={Exit} alt="" />
            </button>
            <a href="#!" className="nav-btn d-none d-md-flex">
              <img
                src="./assets/icons/buy.svg"
                alt=""
                className="nav-btn__icon icon"
              />
              <span className="nav-btn__title">Card</span>
              <span className="nav-btn__qnt">3</span>
            </a>
            <a href="#!" className="nav-btn d-none d-md-flex">
              <img
                src="./assets/icons/heart.svg"
                alt=""
                className="nav-btn__icon icon"
              />
              <span className="nav-btn__title">Favorite</span>
              <span className="nav-btn__qnt">3</span>
            </a>
            <ul className="navbar__list js-dropdown-list">
              <li className="navbar__item">
                <a href="./" className="navbar__link">
                  {" "}
                  Trang chủ{" "}
                </a>
              </li>
              <li className="navbar__item">
                <a href="#!" className="navbar__link">
                  Sản phẩm
                  <img src={ArrowDown} alt="" className="icon navbar__arrow" />
                </a>
                <DropDown />
              </li>
              <li className="navbar__item">
                <a href="#!" className="navbar__link">
                  {" "}
                  Dịch vụ{" "}
                </a>
              </li>
              <li className="navbar__item">
                <a href="#!" className="navbar__link">
                  {" "}
                  Liên hệ{" "}
                </a>
              </li>
            </ul>
          </nav>
          <div className="navbar__overlay js-toggle" toggle-target="#navbar" />
          {/* Actions */}
          <div className="top-act">
            <a href="./sign-in.html" className="btn btn--text d-md-none">
              Đăng nhập
            </a>
            <a
              href="./sign-up.html"
              className="top-act__sign-up btn btn--primary"
            >
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
