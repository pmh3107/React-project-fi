import React, { useState } from "react";
import "../../css/style.css";
import ArrowDown from "../assets/icon/arrow-down.svg";
import More from "../assets/icon/more.svg";
// import "../../js/scripts";
import Vinfast from "../assets/category/Vinfast.png";
import KIA from "../assets/category/KIA.png";
import Suzuki from "../assets/category/Suzuki.png";
import Toyota from "../assets/category/Toyota.png";
import Ford from "../assets/category/ford.png";
import Honda from "../assets/category/honda.jpg";
import Mazda from "../assets/category/mazda.png";
import Mercedes from "../assets/category/mercedes.jpg";
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
          <a href="./" className="logo top-bar__logo">
            <img
              src="https://i.imgur.com/TpDQQxk.png"
              alt="Xe lướt miền Trung"
              className="logo__img top-bar__logo-img"
            />
          </a>
          {/* Navbar */}
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
                <div className="dropdown">
                  <div className="dropdown__inner">
                    <div className="top-menu">
                      <div className="sub-menu sub-menu--not-main">
                        <div className="sub-menu__column">
                          {/* Menu column 1 */}
                          <div className="menu-column">
                            <div className="menu-column__icon">
                              <img
                                src={Vinfast}
                                alt=""
                                className="menu-column__icon-1"
                              />
                            </div>
                            <div className="menu-column__content">
                              <h2 className="menu-column__heading">
                                <a href="#!">Vinfast</a>
                              </h2>
                              <ul className="menu-column__list">
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Vinfast Lux SA2.0
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Vinfast Lux A2.0
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Vinfast Fadil
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Menu column 2 */}
                          <div className="menu-column">
                            <div className="menu-column__icon">
                              <img
                                src={Toyota}
                                alt=""
                                className="menu-column__icon-1"
                              />
                            </div>
                            <div className="menu-column__content">
                              <h2 className="menu-column__heading">
                                <a href="#!">Toyota</a>
                              </h2>
                              <ul className="menu-column__list">
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Land Cruiser
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Alpha
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Prado
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Camry
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Corolla Altis
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Fortuner
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Yaris
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Avanza
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Toyota Rush
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="sub-menu__column">
                          {/* Menu column 1 */}
                          <div className="menu-column">
                            <div className="menu-column__icon">
                              <img
                                src={Ford}
                                alt=""
                                className="menu-column__icon-1"
                              />
                            </div>
                            <div className="menu-column__content">
                              <h2 className="menu-column__heading">
                                <a href="#!">Ford</a>
                              </h2>
                              <ul className="menu-column__list">
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Ford F-150
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Ford Explorer
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Ford Escape
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Ford Mustang
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Ford Ranger
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Ford EcoSport
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Ford Everest
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Ford Fista
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Menu column 2 */}
                          <div className="menu-column">
                            <div className="menu-column__icon">
                              <img
                                src={Mercedes}
                                alt=""
                                className="menu-column__icon-1"
                              />
                            </div>
                            <div className="menu-column__content">
                              <h2 className="menu-column__heading">
                                <a href="#!">Mercedes</a>
                              </h2>
                              <ul className="menu-column__list">
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mercedes C300
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mercedes S400
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mercedes G63
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="sub-menu__column">
                          {/* Menu column 1 */}
                          <div className="menu-column">
                            <div className="menu-column__icon">
                              <img
                                src={Suzuki}
                                alt=""
                                className="menu-column__icon-1"
                              />
                            </div>
                            <div className="menu-column__content">
                              <h2 className="menu-column__heading">
                                <a href="#!">Suzuki</a>
                              </h2>
                              <ul className="menu-column__list">
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Suzuki Swift
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Suzuki S-Cross
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Suzuki Jimny
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Suzuki XL7
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Suzuki Ertiga
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Menu column 2 */}
                          <div className="menu-column">
                            <div className="menu-column__icon">
                              <img
                                src={Mazda}
                                alt=""
                                className="menu-column__icon-1"
                              />
                            </div>
                            <div className="menu-column__content">
                              <h2 className="menu-column__heading">
                                <a href="#!">Mazda</a>
                              </h2>
                              <ul className="menu-column__list">
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mazda 6
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mazda 3
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mazda CX-8
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mazda CX-5
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mazda CX-30
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mazda 2
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Mazda BT-50
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="sub-menu__column">
                          {/* Menu column 1 */}
                          <div className="menu-column">
                            <div className="menu-column__icon">
                              <img
                                src={Honda}
                                alt=""
                                className="menu-column__icon-1"
                              />
                            </div>
                            <div className="menu-column__content">
                              <h2 className="menu-column__heading">
                                <a href="#!">Honda</a>
                              </h2>
                              <ul className="menu-column__list">
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Honda City
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Honda Civic
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Honda H-RV
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Honda C-RV
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Menu column 2 */}
                          <div className="menu-column">
                            <div className="menu-column__icon">
                              <img
                                src={KIA}
                                alt=""
                                className="menu-column__icon-1"
                              />
                            </div>
                            <div className="menu-column__content">
                              <h2 className="menu-column__heading">
                                <a href="#!">KIA</a>
                              </h2>
                              <ul className="menu-column__list">
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Kia Seltos
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Kia Sportage
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Kia Morning
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Kia Candival
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Kia Optima
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Kia Rio
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Kia Sedona
                                  </a>
                                </li>
                                <li className="menu-column__item">
                                  <a href="#!" className="menu-column__link">
                                    Kia Sorento
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
