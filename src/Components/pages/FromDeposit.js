import React from "react";
import { useState } from "react";

export default function FromDeposit() {
  const [formData, setFormData] = useState({
    email: "",
    cardHolder: "",
    cardDetails: "",
    cardExpire: "",
    cardCvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (optional)
        console.log("Form data sent successfully");
      } else {
        window.location.href = "/404";
        // Handle error
        console.error("Form data submission failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <>
      <div className="deposit-container">
        <div className="cart-info">
          <h2 className="cart-info__heading ">Thông tin đặt cọc</h2>
          <p className="cart-info__desc">
            Complete your purchase item by providing your payment details order.
          </p>
          <form
            action=""
            className="form cart-info__form"
            onSubmit={handleSubmit}
          >
            <div className="form__group">
              <label
                htmlFor="email"
                className="form__label form__label--medium"
              >
                Địa chỉ email
              </label>
              <div className="form__text-input">
                <input
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form__input"
                  required=""
                />
                <img
                  src="./assets/icons/form-error.svg"
                  alt=""
                  className="form__input-icon-error"
                />
              </div>
              <p className="form__error">Email không đúng !</p>
            </div>
            <div className="form__group">
              <label
                htmlFor="card-holder"
                className="form__label form__label--medium"
              >
                Họ và Tên
              </label>
              <div className="form__text-input">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="card-holder"
                  id="card-holder"
                  placeholder="Card Holder"
                  className="form__input"
                  required=""
                />
                <img
                  src="./assets/icons/form-error.svg"
                  alt=""
                  className="form__input-icon-error"
                />
              </div>
            </div>
            <div className="form__group">
              <label
                htmlFor="card-details"
                className="form__label form__label--medium"
              >
                Chi tiết thẻ
              </label>
              <div className="form__text-input">
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="card-details"
                  id="card-details"
                  placeholder="Card Details"
                  className="form__input"
                  required=""
                />
                <img
                  src="./assets/icons/form-error.svg"
                  alt=""
                  className="form__input-icon-error"
                />
              </div>
            </div>
            <div className="form__row">
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="card-expire"
                    id="card-expire"
                    placeholder="MM/YY"
                    className="form__input"
                    required=""
                  />
                  <img
                    src="./assets/icons/form-error.svg"
                    alt=""
                    className="form__input-icon-error"
                  />
                </div>
              </div>
              <div className="form__group">
                <div className="form__text-input">
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="card-cvc"
                    id="card-cvc"
                    placeholder="CVC"
                    className="form__input"
                    required=""
                  />
                  <img
                    src="./assets/icons/form-error.svg"
                    alt=""
                    className="form__input-icon-error"
                  />
                </div>
              </div>
            </div>
            <div className="cart-info__row">
              <span>Giá tiền xe</span>
              <span>799 triệu</span>
            </div>
            <div className="cart-info__row">
              <span>Số tiền đặt cọc (10% giá trị xe)</span>
              <span>79,9 triệu</span>
            </div>
            <div className="cart-info__separate" />
            <div className="cart-info__row">
              <span>Số tiền cần thanh toán</span>
              <span>79,9 triệu</span>
            </div>
            <button
              type="submit"
              className="cart-info__next-btn btn btn--primary btn--rounded"
            >
              Tiến hành đặt cọc
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
