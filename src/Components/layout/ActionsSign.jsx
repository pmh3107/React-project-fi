import React from "react";
// import ButtonPrimary from "../commons/Button";
export default function Sign() {
  const signInfo = [
    {
      link: "/signUp",
      nameBtn: "Đăng ký",
      className: "btn--text d-md-none",
    },
    {
      link: "/signIn",
      nameBtn: "Đăng nhập",
      className: "top-act__sign-up btn btn--primary",
    },
  ];
  return (
    <div className="top-act">
      {signInfo.map((item, index) => (
        <a key={index} className={item.className} href={item.link}>
          {item.nameBtn}
        </a>
      ))}
    </div>
  );
}
