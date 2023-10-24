import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ButtonPrimary from "../commons/Button";
import FilterIcon from "../assets/icon/filter.svg";
import ArrowUp from "../assets/icon/arrow-up.png";

const FilterPrice = () => {
  return (
    <div className="filter__col">
      <label htmlFor="" className="form__label">
        Khoảng giá
      </label>
      <div className="filter__form-group">
        <Slider
          min={0}
          max={100}
          defaultValue={[0, 100]}
          marks={{ 0: "250tr", 100: "10ty" }}
        />
      </div>
      <div className="filter__form-group filter__form-group--inline">
        <div>
          <label htmlFor="" className="form__label form__label--small">
            Thấp nhất
          </label>
          <div className="filter__form-text-input filter__form-text-input--small">
            <input
              type="text"
              name=""
              id=""
              className="filter__form-input"
              defaultValue="250tr"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="form__label form__label--small">
            Cao nhất
          </label>
          <div className="filter__form-text-input filter__form-text-input--small">
            <input
              type="text"
              name=""
              id=""
              className="filter__form-input"
              defaultValue="10ty"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterClassCar = () => {
  return (
    <div className="filter__col">
      <label htmlFor="" className="form__label">
        Phân khúc xe
      </label>
      <div className="filter__form-group">
        <div className="form__select-wrap">
          <select className="form__select">
            <option value="">Hạng Xe</option>
            <option value="A">Hạng A</option>
            <option value="B">Hạng B</option>
            <option value="C">Hạng C</option>
            <option value="D">Hạng D</option>
          </select>
        </div>
      </div>
      <div className="filter__form-group">
        <div className="form__tags">
          <button className="form__tag">Hạng A</button>
          <button className="form__tag">Hạng B</button>
          <button className="form__tag">Hạng C</button>
        </div>
      </div>
    </div>
  );
};

const FilterSearch = () => {
  return (
    <div className="filter__col">
      <label htmlFor="" className="form__label">
        Tìm kiếm
      </label>
      <div className="filter__form-group">
        <div className="filter__form-text-input">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search brand name"
            className="filter__form-input"
          />
          <img
            src="./assets/icons/search.svg"
            alt=""
            className="filter__form-input-icon icon"
          />
        </div>
      </div>
      <div className="filter__form-group">
        <div className="form__tags">
          <button className="form__tag">Mazda CX-5</button>
          <button className="form__tag">Toyota Camry</button>
          <button className="form__tag">Ford Ecosport</button>
        </div>
      </div>
    </div>
  );
};

export default function Filter() {
  const buttonData = [
    {
      link: "#!",
      nameBtn: "Hủy",
      className: "btn btn--text filter__cancel",
    },
    {
      link: "#!",
      nameBtn: "Tìm kiếm",
      className: "btn--primary filter__submit",
    },
  ];
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <>
      <div class="filter-wrap">
        <button class="filter-btn js-toggle" onClick={toggleFilter}>
          Lọc
          <img src={FilterIcon} alt="" className="filter-btn__icon icon" />
        </button>
        <div
          id="home-filter"
          className={`filter ${isFilterVisible ? "" : "hide"}`}
        >
          <img src={ArrowUp} alt="" className="filter__arrow" />
          <h3 className="filter__heading">Lọc</h3>
          <form action="" className="filter__form form">
            <div className="filter__row filter__content">
              <FilterPrice />
              <div className="filter__separate" />
              <FilterClassCar />
              <div className="filter__separate" />
              <FilterSearch />
            </div>
            <div className="filter__row filter__footer">
              {buttonData.map((item, index) => (
                <ButtonPrimary
                  key={index}
                  href={item.link}
                  className={`btn ${item.className}`}
                  name={item.nameBtn}
                />
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
