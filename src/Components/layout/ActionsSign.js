import React from "react";

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
        <a key={index} href={item.link} className={`btn ${item.className}`}>
          {item.nameBtn}
        </a>
      ))}
    </div>
  );
}
