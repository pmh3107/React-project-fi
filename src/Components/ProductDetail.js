import React from "react";
import HeaderAlreadySingIn from "./layout/HeaderAlreadySignIn";
import Footer from "./layout/Footer";
import IconSearch from "./assets/icon/search.svg";
function ProductDetail() {
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
            <div className="product-container">
              <ul className="breadcrumbs">
                <li>
                  <a href="#!" className="breadcrumbs__link">
                    Xe lướt miền Trung
                    <img src="./assets/icons/arrow-right.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!" className="breadcrumbs__link">
                    Honda
                    <img src="./assets/icons/arrow-right.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="breadcrumbs__link breadcrumbs__link--current"
                  >
                    {" "}
                    Honda Civic{" "}
                  </a>
                </li>
              </ul>
            </div>
            {/* Product info */}
            <div className="product-container prod-info-content">
              <div className="row">
                <div className="col-5 col-xl-6 col-lg-12">
                  <div className="prod-preview">
                    <div className="prod-preview__list">
                      <div className="prod-preview__item">
                        <img
                          src="./assets/img/product/civic.webp"
                          alt=""
                          className="prod-preview__img"
                        />
                      </div>
                      <div className="prod-preview__item">
                        <img
                          src="./assets/img/product/civic-1.jpg"
                          alt=""
                          className="prod-preview__img"
                        />
                      </div>
                      <div className="prod-preview__item">
                        <img
                          src="./assets/img/product/civic-2.jpg"
                          alt=""
                          className="prod-preview__img"
                        />
                      </div>
                      <div className="prod-preview__item">
                        <img
                          src="./assets/img/product/civic-3.jpg"
                          alt=""
                          className="prod-preview__img"
                        />
                      </div>
                    </div>
                    <div className="prod-preview__thumbs">
                      <img
                        src="./assets/img/product/civic.webp"
                        alt=""
                        className="prod-preview__thumb-img prod-preview__thumb-img--current"
                      />
                      <img
                        src="./assets/img/product/civic-2.jpg"
                        alt=""
                        className="prod-preview__thumb-img"
                      />
                      <img
                        src="./assets/img/product/civic-1.jpg"
                        alt=""
                        className="prod-preview__thumb-img"
                      />
                      <img
                        src="./assets/img/product/civic-3.jpg"
                        alt=""
                        className="prod-preview__thumb-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-7 col-xl-6 col-lg-12">
                  <form action="" className="form">
                    <section className="prod-info">
                      <h1 className="prod-info__heading">HONDA CIVIC RS</h1>
                      <div className="row">
                        <div className="col-5 col-xxl-6 col-xl-12">
                          <div className="prod-prop">
                            <img
                              src="./assets/icons/star.svg"
                              alt=""
                              className="prod-prop__icon"
                            />
                            <h4 className="prod-prop__title">Năm 2021</h4>
                          </div>
                          <label
                            htmlFor=""
                            className="form__label prod-info__label"
                          >
                            Gói bảo hành
                          </label>
                          <div className="filter__form-group">
                            <div className="form__tags">
                              <button className="form__tag prod-info__tag">
                                6 tháng
                              </button>
                              <button className="form__tag prod-info__tag">
                                12 tháng
                              </button>
                              <button className="form__tag prod-info__tag">
                                3 năm
                              </button>
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
                                <h4 className="prod-prop__title">
                                  Thời hạn đăng kiểm
                                </h4>
                                <p className="prod-prop__desc">30/12/2023</p>
                              </div>
                            </div>
                            <div className="prod-prop">
                              <img
                                src="./assets/icons/buy.svg"
                                alt=""
                                className="prod-prop__icon icon"
                              />
                              <div>
                                <h4 className="prod-prop__title">
                                  Giao xe tận nơi
                                </h4>
                                <p className="prod-prop__desc">
                                  Từ 2 - 4 ngày làm việc
                                </p>
                              </div>
                            </div>
                            <div className="prod-info__card">
                              <div className="prod-info__row">
                                <span className="prod-info__price">
                                  Trả góp: 40 triệu/tháng
                                </span>
                                <span className="prod-info__tax">
                                  Lãi xuất 1%
                                </span>
                              </div>
                              <p className="prod-info__total-price">
                                799 triệu
                              </p>
                              <div className="prod-info__row">
                                <button className="btn btn--primary prod-info__add-to-cart">
                                  Đặt cọc ngay
                                </button>
                                <button className="like-btn prod-info__like-btn">
                                  <img
                                    src="./assets/icons/heart.svg"
                                    alt=""
                                    className="like-btn__icon icon"
                                  />
                                  <img
                                    src="./assets/icons/heart-red.svg"
                                    alt=""
                                    className="like-btn__icon--liked"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </form>
                </div>
              </div>
            </div>
            {/* Product content */}
            <div className="product-container">
              <div className="prod-tab">
                <ul className="prod-tab__list">
                  <li className="prod-tab__item">Mô tả</li>
                  <li className="prod-tab__item">Tính năng</li>
                  <li className="prod-tab__item">Đánh giá</li>
                  <li className="prod-tab__item prod-tab__item--current">
                    Tương tự
                  </li>
                </ul>
                <div className="prod-tab__contents">
                  <div className="prod-tab__content">
                    <div className="prod-content">
                      <h2 className="prod-content__heading">
                        Đánh giá từ người dùng
                      </h2>
                      <div className="row row-cols-3">
                        {/* Review card 1 */}
                        <div className="col">
                          <div className="review-card">
                            <div className="review-card__content">
                              <img
                                src="./assets/img/avatar/avatar-1.png"
                                alt=""
                                className="review-card__avatar"
                              />
                              <div className="review-card__info">
                                <h4 className="review-card__title">
                                  Jakir Hussen
                                </h4>
                                <p className="review-card__desc">
                                  Xe đẹp, hợp thời trang !
                                </p>
                                <span className="review-card__day">
                                  20/10/2023
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Review card 2 */}
                        <div className="col">
                          <div className="review-card">
                            <div className="review-card__content">
                              <img
                                src="./assets/img/avatar/avatar-2.png"
                                alt=""
                                className="review-card__avatar"
                              />
                              <div className="review-card__info">
                                <h4 className="review-card__title">
                                  Jubed Ahmed
                                </h4>
                                <p className="review-card__desc">
                                  Xe này mạnh quá đi đua thì bao win :))
                                </p>
                                <span className="review-card__day">
                                  20/10/2023
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Review card 3 */}
                        <div className="col">
                          <div className="review-card">
                            <div className="review-card__content">
                              <img
                                src="./assets/img/avatar/avatar-3.png"
                                alt=""
                                className="review-card__avatar"
                              />
                              <div className="review-card__info">
                                <h4 className="review-card__title">
                                  Delwar Hussain
                                </h4>
                                <p className="review-card__desc">Great car !</p>
                                <span className="review-card__day">
                                  20/10/2023
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="prod-tab__content prod-tab__content--current">
                    <div className="prod-content">
                      <h2 className="prod-content__heading">
                        Similar items you might like
                      </h2>
                      <div className="row row-cols-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3">
                        {/* Product card 1 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Canival.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">
                                KIA CARNIVAL SIGNATURE 7S 2.2D
                              </a>
                            </h3>
                            <p className="product-card__brand">
                              Số km : 200.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                1T430TR
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2023</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 2 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Morning.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">KIA MORNING MT</a>
                            </h3>
                            <p className="product-card__brand">
                              Số km : 38.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                239 triệu
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2020</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 3 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Civic.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn like-btn--liked product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">HONDA CIVIC RS</a>
                            </h3>
                            <p className="product-card__brand">
                              Số km: 7.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                799 triệu
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2021</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 4 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/LUX A.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">
                                VINFAST LUX A 2.0 PLUS
                              </a>
                            </h3>
                            <p className="product-card__brand">
                              Số km: 37.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                569 triệu{" "}
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2021</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 1 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Canival.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">
                                KIA CARNIVAL SIGNATURE 7S 2.2D
                              </a>
                            </h3>
                            <p className="product-card__brand">
                              Số km : 200.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                1T430TR
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2023</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 2 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Morning.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">KIA MORNING MT</a>
                            </h3>
                            <p className="product-card__brand">
                              Số km : 38.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                239 triệu
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2020</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 3 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Civic.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn like-btn--liked product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">HONDA CIVIC RS</a>
                            </h3>
                            <p className="product-card__brand">
                              Số km: 7.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                799 triệu
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2021</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 4 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/LUX A.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">
                                VINFAST LUX A 2.0 PLUS
                              </a>
                            </h3>
                            <p className="product-card__brand">
                              Số km: 37.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                569 triệu{" "}
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2021</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 1 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Canival.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">
                                KIA CARNIVAL SIGNATURE 7S 2.2D
                              </a>
                            </h3>
                            <p className="product-card__brand">
                              Số km : 200.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                1T430TR
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2023</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 2 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Morning.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">KIA MORNING MT</a>
                            </h3>
                            <p className="product-card__brand">
                              Số km : 38.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                239 triệu
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2020</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 3 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/Civic.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn like-btn--liked product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">HONDA CIVIC RS</a>
                            </h3>
                            <p className="product-card__brand">
                              Số km: 7.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                799 triệu
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2021</span>
                            </div>
                          </article>
                        </div>
                        {/* Product card 4 */}
                        <div className="col">
                          <article className="product-card">
                            <div className="product-card__img-wrap">
                              <a href="./product-detail.html">
                                <img
                                  src="./assets/img/product/LUX A.jpg"
                                  alt=""
                                  className="product-card__thumb"
                                />
                              </a>
                              <button className="like-btn product-card__like-btn">
                                <img
                                  src="./assets/icons/heart.svg"
                                  alt=""
                                  className="like-btn__icon icon"
                                />
                                <img
                                  src="./assets/icons/heart-red.svg"
                                  alt=""
                                  className="like-btn__icon--liked"
                                />
                              </button>
                            </div>
                            <h3 className="product-card__title">
                              <a href="./product-detail.html">
                                VINFAST LUX A 2.0 PLUS
                              </a>
                            </h3>
                            <p className="product-card__brand">
                              Số km: 37.000km
                            </p>
                            <div className="product-card__row">
                              <span className="product-card__price">
                                569 triệu{" "}
                              </span>
                              <img
                                src="./assets/icons/star.svg"
                                alt=""
                                className="product-card__star"
                              />
                              <span className="product-card__score">2021</span>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
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
