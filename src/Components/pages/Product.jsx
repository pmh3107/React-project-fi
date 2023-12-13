import React from "react";
import Calendar from "../assets/icon/Calendar.svg";
import Heart from "../assets/icon/heart.svg";
import HeartRed from "../assets/icon/heart-red.svg";
function Product(props) {
  return (
    <>
      <div className="col">
        <article className="product-card" onClick={props.onClick}>
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
            <span className="product-card__price">{props.price} triệu</span>
            <img src={Calendar} alt="" className="product-card__year" />
            <span className="product-card__score">{`Năm: ${props.year}`}</span>
          </div>
        </article>
      </div>
    </>
  );
}
export default Product;
