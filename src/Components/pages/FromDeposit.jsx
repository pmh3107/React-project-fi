import React from "react";
import { useState } from "react";
import { format, isAfter } from "date-fns";
import { useNavigate, useLocation } from "react-router-dom";
import ErrorIcon from "../assets/icon/form-error.svg";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
function InfoCarDeposit(props) {
  return (
    <div className="col-4 col-xl-12">
      <div className="cart-info">
        <div className="cart-info__top">
          <h2 className="cart-info__heading cart-info__heading--lv2">
            1. Hình ảnh xe
          </h2>
        </div>
        <article className="payment-item">
          <img src={props.carImg} className="payment-item__img" alt="" />
        </article>
      </div>
      <div className="cart-info">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          2. Thông tin xe
        </h2>
        <div className="cart-info__separate" />
        <article className="payment-item payment-item__customs">
          <h3 className="payment-item__title">Tên xe : {props.carName}</h3>
          <h3 className="payment-item__title">
            Năm sản xuất : {props.carYear}
          </h3>
          <h3 className="payment-item__title">
            Số km đã đi : {props.carKmTraveled} km
          </h3>
          <h3 className="payment-item__title">
            Hạn đăng kiểm : {props.carRegistry}
          </h3>
          <h3 className="payment-item__title">Bảo hành : 1 năm</h3>
        </article>
      </div>
    </div>
  );
}
export default function FromDeposit() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: 0,
    dayPickUp: "",
    note: "",
  });
  const navigate = useNavigate();
  // Catch data of car
  const location = useLocation();
  const productData = location.state && location.state.productData;
  // Calculate cost of deposit
  const cashDeposit = (value) => {
    const cash = value * 0.05;
    const roundedCash = cash.toFixed(2);
    return roundedCash;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // submit form and save it to database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const carDataCollection = collection(db, "DEPOSIT");
    const carDocRef = doc(carDataCollection, formData.name);
    try {
      // Set data into Firebase
      await setDoc(carDocRef, {
        car: productData.name,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        dayPickUp: formData.dayPickUp,
        note: formData.note,
      });
      console.log("successful !");
      navigate(`/sent`, { state: { productData: formData } });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  // day, month, year when select
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const dateValue = event.target.value;
    const currentDate = format(new Date(), "yyyy-MM-dd");
    if (isAfter(new Date(dateValue), new Date(currentDate))) {
      setFormData({ ...formData, dayPickUp: dateValue });
      setSelectedDate(dateValue);
      setError("");
    } else {
      setError("Vui lòng chọn một ngày trong tương lai.");
    }
  };

  return (
    <main className="checkout-page">
      <div className="container">
        <div className="checkout-container">
          <div className="row gy-xl-3">
            <InfoCarDeposit
              carImg={productData.img}
              carName={productData.name}
              carYear={productData.year}
              carKmTraveled={productData.kmTraveled}
              carRegistry={productData.register}
            />
            <div className="col-8 col-xl-12">
              <div className="cart-info">
                <h2 className="cart-info__heading cart-info__heading--lv2">
                  Bảng đăng ký đặt cọc xe
                </h2>
                <p className="cart-info__desc">
                  Quý khách vui lòng kiểm tra thông tin xe và tiến hành điền vào
                  from đặt cọc
                </p>
                <form
                  action=""
                  className="form cart-info__form"
                  onSubmit={handleSubmit}
                >
                  <div className="form__group">
                    <label htmlFor="card-holder" className="form__label">
                      Họ và tên
                    </label>
                    <div className="form__text-input">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        id="card-holder"
                        placeholder="Name"
                        className="form__input"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form__group">
                    <label htmlFor="email" className="form__label">
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
                        src={ErrorIcon}
                        alt=""
                        className="form__input-icon-error"
                      />
                    </div>
                    <p className="form__error">Địa chỉ email không hợp lệ</p>
                  </div>

                  <div className="form__group">
                    <label htmlFor="card-holder" className="form__label">
                      Số điện thoại
                    </label>
                    <div className="form__text-input">
                      <input
                        onChange={handleInputChange}
                        type="number"
                        name="phone"
                        id="card-holder"
                        placeholder="Phone"
                        className="form__input"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form__group">
                    <label htmlFor="card-details" className="form__label">
                      Ngày nhận xe
                    </label>
                    <div className="form__text-input">
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={handleChange}
                        name="dayPickUp"
                        id="card-details"
                        placeholder="Card Details"
                        className="form__input"
                        required=""
                      />
                      {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                  </div>
                  <div className="form__group">
                    <label htmlFor="card-details" className="form__label">
                      Ghi chú
                    </label>
                    <div className="form__text-input">
                      <textarea
                        onChange={handleInputChange}
                        type="text"
                        name="note"
                        id="card-expire"
                        placeholder="Note"
                        className="form__input form__input--textarea"
                      />
                    </div>
                  </div>
                  <div className="cart-info__row">
                    <span>Giá tiền xe</span>
                    <span>{productData.price} triệu</span>
                  </div>
                  <div className="cart-info__row">
                    <span>
                      Phí đặt cọc
                      <span className="cart-info__sub-label">
                        (10% giá trị xe)
                      </span>
                    </span>
                    <span>{cashDeposit(productData.price)} triệu</span>
                  </div>
                  <div className="cart-info__separate" />
                  <div className="cart-info__row">
                    <span>Số tiền phải thanh toán</span>
                    <span>{cashDeposit(productData.price)} triệu</span>
                  </div>
                  <button
                    type="submit"
                    className="cart-info__next-btn btn btn--primary btn--rounded"
                  >
                    Xác nhận đặt cọc
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
