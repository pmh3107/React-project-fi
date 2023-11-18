import React from "react";
import { useEffect } from "react";
import LightIcon from "../assets/icon/light.svg";
export default function IconTheme() {
  useEffect(() => {
    // Kiểm tra giá trị trong localStorage khi component được tạo
    if (localStorage.getItem("darkTheme") === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []); // Chỉ chạy một lần khi component được tạo

  const handleThemeToggle = () => {
    // Đảo ngược giá trị trong localStorage
    const currentTheme = localStorage.getItem("darkTheme") === "true";
    localStorage.setItem("darkTheme", !currentTheme);
    // Thêm hoặc xóa class "dark" trực tiếp từ thẻ html
    document.documentElement.classList.toggle("dark", !currentTheme);
  };
  return (
    <>
      <div className="top-bar__theme">
        <button
          className="top-bar__theme--btn btn btn--rounded"
          onClick={handleThemeToggle}
        >
          <img src={LightIcon} alt="" />
        </button>
      </div>
    </>
  );
}
