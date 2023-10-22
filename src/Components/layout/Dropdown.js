import React from "react";
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
    <div className="menu-column">
      <div className="menu-column__icon">
        <img src={props.src} alt="" className="menu-column__icon" />
      </div>
      <div className="menu-column__content">
        <h2 className="menu-column__heading">
          <a href="#!">{props.title}</a>
        </h2>
        <ul className="menu-column__list">
          {props.item.map((item, index) => (
            <li key={index} className="menu-column__item">
              <a href={item.link} className="menu-column__link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function createColumns(data, itemsPerColumn) {
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
            item={item.product}
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
      title: "VinFast",
      product: [
        {
          name: " Vinfast Lux SA2.0",
          link: "#!",
        },
        {
          name: " Vinfast Lux A2.0",
          link: "#!",
        },
        {
          name: " Vinfast Fadil",
          link: "#!",
        },
      ],
    },
    {
      src: Toyota,
      title: "Toyota",
      product: [
        {
          name: " Toyota Land Cruiser",
          link: "#!",
        },
        {
          name: "Toyota Alpha",
          link: "#!",
        },
        {
          name: "Toyota Prado",
          link: "#!",
        },
        {
          name: "Toyota Camry",
          link: "#!",
        },
        {
          name: "Toyota Corolla Altis",
          link: "#!",
        },
        {
          name: "Toyota Fortuner",
          link: "#!",
        },
        {
          name: "Toyota Avanza",
          link: "#!",
        },
        {
          name: "Toyota Rush",
          link: "#!",
        },
      ],
    },

    {
      src: Ford,
      title: "Ford",
      product: [
        {
          name: "Ford F-150",
          link: "#!",
        },
        {
          name: "Ford Explorer",
          link: "#!",
        },
        {
          name: "Ford Escape",
          link: "#!",
        },
        {
          name: "Ford Mustang",
          link: "#!",
        },
        {
          name: "Ford EcoSport",
          link: "#!",
        },
        {
          name: "Ford Ranger",
          link: "#!",
        },
        {
          name: "Ford Everest",
          link: "#!",
        },
        {
          name: "Ford Fiesta",
          link: "#!",
        },
      ],
    },
    {
      src: Mercedes,
      title: "Mercedes",
      product: [
        {
          name: "Mercedes",
          link: "#!",
        },
        {
          name: "Mercedes S400",
          link: "#!",
        },
        {
          name: "Mercedes G63",
          link: "#!",
        },
      ],
    },
    {
      src: Suzuki,
      title: "Suzuki",
      product: [
        {
          name: "Suzuki Swift",
          link: "#!",
        },
        {
          name: "Suzuki S-Cross",
          link: "#!",
        },
        {
          name: "Suzuki Jimny",
          link: "#!",
        },
        {
          name: "Suzuki XL7",
          link: "#!",
        },
        {
          name: "Suzuki Ertiga",
          link: "#!",
        },
      ],
    },
    {
      src: Mazda,
      title: "Mazda",
      product: [
        {
          name: "Mazda 6",
          link: "#!",
        },
        {
          name: "Mazda 3",
          link: "#!",
        },
        {
          name: "Mazda CX-8",
          link: "#!",
        },
        {
          name: "Mazda CX-5",
          link: "#!",
        },
        {
          name: "Mazda CX-30",
          link: "#!",
        },
        {
          name: "Mazda 2",
          link: "#!",
        },
        {
          name: "Mazda BT-50",
          link: "#!",
        },
      ],
    },

    {
      src: Honda,
      title: "Honda",
      product: [
        {
          name: "Honda City",
          link: "#!",
        },
        {
          name: "Honda Civic",
          link: "#!",
        },
        {
          name: "Honda H-RV",
          link: "#!",
        },
        {
          name: "Honda C-RV",
          link: "#!",
        },
      ],
    },
    {
      src: KIA,
      title: "KIA",
      product: [
        {
          name: "Kia Seltos",
          link: "#!",
        },
        {
          name: "Kia Sportage",
          link: "#!",
        },
        {
          name: "Kia Morning",
          link: "#!",
        },
        {
          name: " Kia Optima",
          link: "#!",
        },
        {
          name: "Kia Rio",
          link: "#!",
        },
        {
          name: "Kia Sedona",
          link: "#!",
        },
        {
          name: "Kia Sorento",
          link: "#!",
        },
      ],
    },
  ];
  const itemsPerColumn = 2; // Số mục hiển thị trên mỗi cột
  const columns = createColumns(nameBranchData, itemsPerColumn);
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
