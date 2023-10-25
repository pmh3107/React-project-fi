import React from "react";
import Filter from "./Filter";
import Calendar from "../assets/icon/Calendar.svg";
import Heart from "../assets/icon/heart.svg";
import HeartRed from "../assets/icon/heart-red.svg";

import Canival from "../assets/product/Canival.jpg";
import Civic from "../assets/product/Civic.jpg";
import LuxA from "../assets/product/LUX A.jpg";
import Morning from "../assets/product/Morning.jpg";

function Product(props) {
  return (
    <>
      <div className="col">
        <article className="product-card">
          <div className="product-card__img-wrap">
            <a href={props.link}>
              <img src={props.srcImg} alt="" className="product-card__thumb" />
            </a>
            <button className="like-btn product-card__like-btn">
              <img src={Heart} alt="" className="like-btn__icon icon" />
              <img src={HeartRed} alt="" className="like-btn__icon--liked" />
            </button>
          </div>
          <h3 className="product-card__title">
            <a href={props.link}>{props.title}</a>
          </h3>
          <p className="product-card__brand">{`Số km: ${props.kmNumber} km`}</p>
          <div className="product-card__row">
            <span className="product-card__price">{props.price}</span>
            <img src={Calendar} alt="" className="product-card__year" />
            <span className="product-card__score">{`Năm: ${props.year}`}</span>
          </div>
        </article>
      </div>
    </>
  );
}
export default function TotalProduct() {
  const productData = [
    {
      srcImg: Canival,
      title: "KIA CARNIVAL SIGNATURE 7S 2.2D",
      price: "1 tỷ 430 triệu",
      kmNumber: "2.000",
      year: "2023",
      link: "/productDetail",
    },
    {
      srcImg: Morning,
      title: "KIA MORNING MT",
      price: "239 triệu",
      kmNumber: "38.000km",
      year: "2020",
      link: "/productDetail",
    },
    {
      srcImg: Civic,
      title: "HONDA CIVIC RS",
      price: "799 triệu",
      kmNumber: "7.000km",
      year: "2021",
      link: "/productDetail",
    },
    {
      srcImg: LuxA,
      title: "VINFAST LUX A 2.0 PLUS",
      price: "569 triệu",
      kmNumber: "37.000km",
      year: "2021",
      link: "/productDetail",
    },
    {
      srcImg: Canival,
      title: "KIA CARNIVAL SIGNATURE 7S 2.2D",
      price: "1 tỷ 430 triệu",
      kmNumber: "2.000",
      year: "2023",
      link: "/productDetail",
    },
    {
      srcImg: Morning,
      title: "KIA MORNING MT",
      price: "239 triệu",
      kmNumber: "38.000km",
      year: "2020",
      link: "/productDetail",
    },
    {
      srcImg: Civic,
      title: "HONDA CIVIC RS",
      price: "799 triệu",
      kmNumber: "7.000km",
      year: "2021",
      link: "/productDetail",
    },
    {
      srcImg: LuxA,
      title: "VINFAST LUX A 2.0 PLUS",
      price: "569 triệu",
      kmNumber: "37.000km",
      year: "2021",
      link: "/productDetail",
    },
    {
      srcImg: Canival,
      title: "KIA CARNIVAL SIGNATURE 7S 2.2D",
      price: "1 tỷ 430 triệu",
      kmNumber: "2.000",
      year: "2023",
      link: "/productDetail",
    },
    {
      srcImg: Morning,
      title: "KIA MORNING MT",
      price: "239 triệu",
      kmNumber: "38.000km",
      year: "2020",
      link: "/productDetail",
    },
    {
      srcImg: Civic,
      title: "HONDA CIVIC RS",
      price: "799 triệu",
      kmNumber: "7.000km",
      year: "2021",
      link: "/productDetail",
    },
    {
      srcImg: LuxA,
      title: "VINFAST LUX A 2.0 PLUS",
      price: "569 triệu",
      kmNumber: "37.000km",
      year: "2021",
      link: "/productDetail",
    },
  ];
  return (
    <>
      <section class="home__container">
        <div class="home__row">
          <h2 class="home__heading">Xe lướt miền Trung</h2>
          <Filter />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3">
          {productData.map((content, index) => (
            <Product
              key={index}
              srcImg={content.srcImg}
              price={content.price}
              title={content.title}
              kmNumber={content.kmNumber}
              year={content.year}
              link={content.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}
