import React from "react";
import { useState } from "react";
import ErrorIcon from "../assets/icon/form-error.svg";

function InfoShowroom() {
  return (
    <div className="col-6 col-xl-12">
      <div className="cart-info">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Xe lướt miền Trung
        </h2>
        <h3 className="cart-info__content">
          Xe lướt miền Trung cùng đội ngũ nhân viên tận tình thân thiết xin hân
          hạnh được hỗ trợ và phục vụ quý khách hàng trên mọi miền tổ quốc.
        </h3>
        <h3 className="cart-info__content">
          <span className="cart-info__content--hl">Địa chỉ:</span> Số 3, Tên
          lửa, Phường 9, Quận Tân Bình, TP.Hồ Chí Minh
        </h3>
        <h3 className="cart-info__content">
          <span className="cart-info__content--hl">Số hotline:</span> 0917979799
        </h3>
        <h3 className="cart-info__content--hl">Cam kết bán hàng</h3>
        <p className="cart-info__desc">
          Auto miền Trung luôn đặt sự hài lòng của khách hàng lên hàng đầu và
          cam kết cung cấp tới tận tay khách hàng một chiếc xe đảm bảo chất
          lượng.
        </p>
        <p className="cart-info__desc">
          Chúng tôi cam kết bằng văn bản: Xe chưa đâm đụng, ngập nước Xe nguyên
          bản, chưa từng đại tu hộp số, động cơ Xe không lỗi phạt nguội Đảm bảo
          giấy tờ hồ sơ pháp lý
        </p>
      </div>
      <div className="cart-info">
        <h2 className="cart-info__heading cart-info__heading--lv2">
          Địa chỉ Showroom
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1647.3751890854862!2d106.72329694010992!3d10.876909622646657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527eea816e5e3%3A0x8543533e554df880!2zQ2h1bmcgQ8awIEZyZXNjYSBSaXZlciBTaWRlIFRo4bunIMSQ4bupYw!5e0!3m2!1svi!2s!4v1700125382276!5m2!1svi!2s"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Địa chỉ showroom"
        ></iframe>
      </div>
    </div>
  );
}

export default function FromContact() {
  // hàm lấy dữ liệu từ form
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    title: "",
    content: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
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
        console.error("Form data submission failed");
        window.location.href = "/404";
        // Handle error
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <main className="checkout-page">
      <div className="container">
        <div className="checkout-container">
          <div className="row gy-xl-3">
            <InfoShowroom />
            <div className="col-6 col-xl-12">
              <div className="cart-info">
                <h2 className="cart-info__heading cart-info__heading--lv2">
                  Trang liên hệ
                </h2>
                <p className="cart-info__desc">
                  Hãy liên lạc với chúng tôi nếu quý khách có bất kì câu hỏi hay
                  cần sự trợ giúp.
                </p>
                <form
                  action=""
                  className="form cart-info__form"
                  onSubmit={handleSubmit}
                >
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
                    <label htmlFor="card-details" className="form__label">
                      Địa chỉ
                    </label>
                    <div className="form__text-input">
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="address"
                        id="card-details"
                        placeholder="Card Details"
                        className="form__input"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form__group">
                    <label htmlFor="card-details" className="form__label">
                      Tiêu đề
                    </label>
                    <div className="form__text-input">
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="title"
                        id="card-details"
                        placeholder="Card Details"
                        className="form__input"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form__group">
                    <label htmlFor="card-details" className="form__label">
                      Nội dung
                    </label>
                    <div className="form__text-input form__text-area-input">
                      <textarea
                        onChange={handleInputChange}
                        type="text"
                        name="content"
                        id="card-expire"
                        placeholder="Note"
                        className="form__input form__input--textarea"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="cart-info__sent btn btn--primary btn--rounded"
                  >
                    Gửi
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
