import React from "react";
import Logo from "./logo.png";

function LogoLink(props) {
  return (
    <a href="./" className={`logo ${props.className}`}>
      <img
        src={Logo}
        alt="Xe lướt miền Trung"
        className={`logo__img ${props.imgClassName}`}
      />
    </a>
  );
}
export default LogoLink;
