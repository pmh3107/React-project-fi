import React from "react";
import { useEffect } from "react";
import LightIcon from "../assets/icon/light.svg";
export default function IconTheme() {
  useEffect(() => {
    // Check value of location storage
    if (localStorage.getItem("darkTheme") === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    // localStorage reverse
    const currentTheme = localStorage.getItem("darkTheme") === "true";
    localStorage.setItem("darkTheme", !currentTheme);
    // add or delete class "dark" directly form html
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
