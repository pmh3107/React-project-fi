import React, { useState } from "react";
import HeaderAlreadySingIn from "./layout/HeaderAlreadySignIn";
import Footer from "./layout/Footer";
import IconSearch from "./assets/icon/search.svg";
import ArrowRight from "./assets/icon/arrow-right.svg";
import Canival from "./assets/product/Canival.jpg";
import Civic from "./assets/product/Civic.jpg";
import LuxA from "./assets/product/LUX A.jpg";
import Morning from "./assets/product/Morning.jpg";
import Calendar from "./assets/icon/Calendar.svg";
import Heart from "./assets/icon/heart.svg";
import HeartRed from "./assets/icon/heart-red.svg";
import AvatarCmt1 from "./assets/avatar/avatar-1.png";
import AvatarCmt2 from "./assets/avatar/avatar-2.png";
import AvatarCmt3 from "./assets/avatar/avatar-3.png";

import Civic1 from "./assets/product/civic-1.jpg";
import Civic2 from "./assets/product/civic-2.jpg";
import Civic3 from "./assets/product/civic-3.jpg";

function DetailCarImg() {
  const images = [Civic, Civic1, Civic2, Civic3];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="col-5 col-xl-6 col-lg-12">
      <div className="prod-preview">
        <div className="prod-preview__list">
          {images.map((image, index) => (
            <div
              key={index}
              className="prod-preview__item"
              onClick={() => handleImageClick(image)}
            >
              <img src={image} alt="" className="prod-preview__img" />
            </div>
          ))}
        </div>
        <div className="prod-preview__thumbs">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`prod-preview__thumb-img ${
                currentImage === images
                  ? "prod-preview__thumb-img--current"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailCar() {
  const carData = {
    name: "HONDA CIVIC RS",
    year: "2021",
    registry: "31/12/2023",
    carHanding: "2 - 4",
    installment: "40",
    price: "799 triệu",
  };
  return (
    <div className="col-7 col-xl-6 col-lg-12">
      <form action="" className="form">
        <section className="prod-info">
          <h1 className="prod-info__heading">{carData.name}</h1>
          <div className="row">
            <div className="col-5 col-xxl-6 col-xl-12">
              <div className="prod-prop">
                <img
                  src="./assets/icons/star.svg"
                  alt=""
                  className="prod-prop__icon"
                />
                <h4 className="prod-prop__title">{`Năm sản xuất: ${carData.year}`}</h4>
              </div>
              <label htmlFor="" className="form__label prod-info__label">
                Gói bảo hành
              </label>
              <div className="filter__form-group">
                <div className="form__tags">
                  <button className="form__tag prod-info__tag">6 tháng</button>
                  <button className="form__tag prod-info__tag">12 tháng</button>
                  <button className="form__tag prod-info__tag">3 năm</button>
                </div>
              </div>
            </div>
            <div className="col-7 col-xxl-6 col-xl-12">
              <div className="prod-props">
                <div className="prod-prop">
                  <img
                    src="./assets/icons/document.svg"
                    alt=""
                    className="prod-prop__icon icon"
                  />
                  <div>
                    <h4 className="prod-prop__title">Thời hạn đăng kiểm</h4>
                    <p className="prod-prop__desc">{carData.registry}</p>
                  </div>
                </div>
                <div className="prod-prop">
                  <img
                    src="./assets/icons/buy.svg"
                    alt=""
                    className="prod-prop__icon icon"
                  />
                  <div>
                    <h4 className="prod-prop__title">Giao xe tận nơi</h4>
                    <p className="prod-prop__desc">{`Từ ${carData.carHanding} ngày làm việc`}</p>
                  </div>
                </div>
                <div className="prod-info__card">
                  <div className="prod-info__row">
                    <span className="prod-info__price">
                      {`Trả góp: ${carData.installment} triệu/tháng`}
                    </span>
                    <span className="prod-info__tax">Lãi xuất 1%</span>
                  </div>
                  <p className="prod-info__total-price">{carData.price}</p>
                  <div className="prod-info__row">
                    <a
                      href="/deposit"
                      className="btn btn--primary prod-info__add-to-cart"
                    >
                      Đặt cọc ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
function RateUser() {
  const commentUser = [
    {
      avatar: AvatarCmt1,
      name: "Jakir Hussen",
      comment: "Xe đẹp, hợp thời trang !",
      dayComment: "20/10/2023",
    },
    {
      avatar: AvatarCmt2,
      name: "Jubed Ahmed",
      comment: "Xe này mạnh quá đi đua thì bao win :))",
      dayComment: "20/10/2023",
    },
    {
      avatar: AvatarCmt3,
      name: "Delwar Hussain",
      comment: "Great car !",
      dayComment: "20/10/2023",
    },
  ];
  return (
    <div className="prod-tab__content--current">
      <div className="prod-content">
        <h2 className="prod-content__heading">Đánh giá từ người dùng</h2>
        <div className="row row-cols-3">
          {/* Review card 1 */}
          {commentUser.map((content, index) => (
            <div className="col">
              <div className="review-card">
                <div key={index} className="review-card__content">
                  <img
                    src={content.avatar}
                    alt=""
                    className="review-card__avatar"
                  />
                  <div className="review-card__info">
                    <h4 className="review-card__title">{content.name}</h4>
                    <p className="review-card__desc">{content.comment}</p>
                    <span className="review-card__day">
                      {content.dayComment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Breadcrumbs() {
  const BreadcrumbsData = [
    {
      name: "Ô tô hạng B",
      highlight: "",
    },
    {
      name: "Honda",
      highlight: "",
    },
    {
      name: "HONDA CIVIC RS",
    },
  ];

  return (
    <div className="product-container">
      <ul className="breadcrumbs">
        {BreadcrumbsData.map((content, index) => (
          <li key={index}>
            <a
              href="#!"
              className={`breadcrumbs__link ${content.highlight} ${
                index === BreadcrumbsData.length - 1
                  ? "breadcrumbs__link--current"
                  : ""
              }`}
            >
              {content.name}
              {index === BreadcrumbsData.length - 1 ? null : (
                <img src={ArrowRight} alt="" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Product() {
  const productData = [
    {
      srcImg: Canival,
      title: "KIA CARNIVAL SIGNATURE 7S 2.2D",
      price: "1T 430tr",
      kmNumber: "2.000",
      year: "2023",
      link: "/productDetail",
    },
    {
      srcImg: Morning,
      title: "KIA MORNING MT",
      price: "239tr",
      kmNumber: "38.000km",
      year: "2020",
      link: "/productDetail",
    },
    {
      srcImg: Civic,
      title: "HONDA CIVIC RS",
      price: "799tr",
      kmNumber: "7.000km",
      year: "2021",
      link: "/productDetail",
    },
    {
      srcImg: LuxA,
      title: "VINFAST LUX A 2.0 PLUS",
      price: "569tr",
      kmNumber: "37.000km",
      year: "2021",
      link: "/productDetail",
    },
  ];

  return (
    <div className="prod-tab__content prod-tab__content--current">
      <div className="prod-content">
        <h2 className="prod-content__heading">
          Sản phẩm tương tự bạn có thể thích
        </h2>
        <div className="row row-cols-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3">
          {productData.map((item, index) => (
            <div className="col">
              <article key={index} className="product-card">
                <div className="product-card__img-wrap">
                  <a href={item.link}>
                    <img
                      src={item.srcImg}
                      alt=""
                      className="product-card__thumb"
                    />
                  </a>
                  <button className="like-btn product-card__like-btn">
                    <img src={Heart} alt="" className="like-btn__icon icon" />
                    <img
                      src={HeartRed}
                      alt=""
                      className="like-btn__icon--liked"
                    />
                  </button>
                </div>
                <h3 className="product-card__title">
                  <a href={item.link}>{item.title}</a>
                </h3>
                <p className="product-card__brand">{`Số km: ${item.kmNumber} km`}</p>
                <div className="product-card__row">
                  <span className="product-card__price">{item.price}</span>
                  <img src={Calendar} alt="" className="product-card__year" />
                  <span className="product-card__score">{item.year}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductDetail() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabNames = ["Mô tả", "Tính năng", "Đánh giá", "Tương tự"];

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  return (
    <>
      <HeaderAlreadySingIn />
      <>
        {/* MAIN */}
        <main className="product-page">
          <div className="container">
            {/* Search bar */}
            <div className="product-container">
              <div className="search-bar d-none d-md-flex">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search for item"
                  className="search-bar__input"
                />
                <button className="search-bar__submit">
                  <img
                    src={IconSearch}
                    alt=""
                    className="search-bar__icon icon"
                  />
                </button>
              </div>
            </div>
            {/* Breadcrumbs */}
            <Breadcrumbs />
            {/* Product info */}
            <div className="product-container prod-info-content">
              <div className="row">
                <DetailCarImg />

                <DetailCar />
              </div>
            </div>
            {/* Product content */}
            <div className="product-container">
              <div className="prod-tab">
                <ul className="prod-tab__list">
                  {tabNames.map((tabName, index) => (
                    <li
                      key={index}
                      className={`prod-tab__item ${
                        index === selectedTab ? "prod-tab__item--current" : ""
                      }`}
                      onClick={() => handleTabClick(index)}
                    >
                      {tabName}
                    </li>
                  ))}
                </ul>
                <div className="prod-tab__contents">
                  {selectedTab === 2 ? <RateUser /> : null}
                  {selectedTab === 3 ? <Product /> : null}
                </div>
              </div>
            </div>
          </div>
        </main>
      </>

      <Footer />
    </>
  );
}

export default ProductDetail;
