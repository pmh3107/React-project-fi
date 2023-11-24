import React from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
function LogoLink(props) {
  return (
    <Link to="/" className={`logo ${props.className}`}>
      <img
        src={Logo}
        alt="Xe lướt miền Trung"
        className={`logo__img ${props.imgClassName}`}
      />
    </Link>
  );
}
export default LogoLink;
