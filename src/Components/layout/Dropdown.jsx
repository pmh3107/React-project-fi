import React from "react";
import { useNavigate } from "react-router-dom";
import Vinfast from "../assets/category/Vinfast.png";
import KIA from "../assets/category/KIA.png";
import Suzuki from "../assets/category/Suzuki.png";
import Toyota from "../assets/category/Toyota.png";
import Ford from "../assets/category/ford.png";
import Honda from "../assets/category/honda.jpg";
import Mazda from "../assets/category/mazda.png";
import Mercedes from "../assets/category/mercedes.jpg";

function MenuColumnList(props) {
  return (
    <div className="menu-column" onClick={props.click}>
      <div className="menu-column__icon">
        <img src={props.src} alt="" className="menu-column__icon" />
      </div>
      <div className="menu-column__content">
        <h2 className="menu-column__heading">
          <button className="menu-column__heading--btn" onClick={props.click}>
            {props.title}
          </button>
        </h2>
      </div>
    </div>
  );
}

function createColumns(data, itemsPerColumn, handleClick) {
  const columns = [];

  for (let i = 0; i < data.length; i += itemsPerColumn) {
    const columnItems = data.slice(i, i + itemsPerColumn);

    columns.push(
      <div className="sub-menu__column" key={i / itemsPerColumn}>
        {columnItems.map((item, index) => (
          <MenuColumnList
            key={index}
            src={item.src}
            title={item.title}
            click={() => handleClick(item.title)}
          />
        ))}
      </div>
    );
  }

  return columns;
}

export default function DropDown() {
  const nameBranchData = [
    {
      src: Vinfast,
      title: "VINFAST",
    },
    {
      src: Toyota,
      title: "TOYOTA",
    },

    {
      src: Ford,
      title: "FORD",
    },
    {
      src: Mercedes,
      title: "MERCEDES",
    },
    {
      src: Mazda,
      title: "MAZDA",
    },

    {
      src: Honda,
      title: "HONDA",
    },
    {
      src: KIA,
      title: "KIA",
    },
    {
      src: Suzuki,
      title: "SUZUKI",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (brandTitle) => {
    navigate(`/motifiProduct/${brandTitle}`, {
      state: { productData: brandTitle },
    });
  };

  const itemsPerColumn = 2; // Số mục hiển thị trên mỗi cột
  const columns = createColumns(nameBranchData, itemsPerColumn, handleClick);

  return (
    <div className="dropdown">
      <div className="dropdown__inner">
        <div className="top-menu">
          <div className="sub-menu sub-menu--not-main">{columns}</div>
        </div>
      </div>
    </div>
  );
}
