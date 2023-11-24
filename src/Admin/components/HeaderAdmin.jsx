import React from "react";
import { Link } from "react-router-dom";
import LogoLink from "../../Components/commons/Logo";
import Logout from "../../Components/assets/icon/logout.svg";
import { useAuth } from "../../Components/AuthContext";
function NavbarItem({ link, name }) {
  return (
    <li className="navbar__item">
      <Link to={link} className="navbar__link">
        {name}
      </Link>
    </li>
  );
}
function Navbar() {
  const navItems = [
    { name: "Quản lý thông tin", link: "/admin" },
    { name: "Quản lý đơn hàng", link: "/adminDeposit" },
    { name: "Quản lý người dùng", link: "/adminUser" },
    { name: "Quảng lý sản phẩm", link: "#!" },
  ];
  return (
    <>
      <ul className="navbar__list js-dropdown-list">
        {navItems.map((item, index) => (
          <NavbarItem key={index} link={item.link} name={item.name} />
        ))}
      </ul>
    </>
  );
}
function HeaderAdmin() {
  const { logoutAdmin } = useAuth();
  const handleLogout = () => {
    logoutAdmin();
    window.location.href = "/";
  };
  return (
    <header className="header headerAdmin">
      <div className="container">
        <div className="top-bar">
          <LogoLink
            className="top-bar__logo"
            imgClassName="top-bar__logo-img"
          />
          <Navbar />
          <div className="top-atc">
            <button className="top-act__logout" onClick={handleLogout}>
              <img src={Logout} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderAdmin;
