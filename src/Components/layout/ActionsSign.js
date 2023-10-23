import React from "react";
import ButtonPrimary from "../commons/Button";
export default function Sign() {
  const signInfo = [
    {
      link: "#!",
      nameBtn: "Đăng nhập",
      className: "btn--text d-md-none",
    },
    {
      link: "#!",
      nameBtn: "Đăng ký",
      className: "top-act__sign-up btn--primary",
    },
  ];
  return (
    <div className="top-act">
      {signInfo.map((item, index) => (
        <ButtonPrimary
          key={index}
          href={item.link}
          className={`btn ${item.className}`}
          name={item.nameBtn}
        />
      ))}
    </div>
  );
}
