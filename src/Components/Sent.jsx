import React, { useEffect } from "react";
import SentIcon from "../Components/assets/icon/thank-you.png";
import { useLocation } from "react-router";
function Sent() {
  useEffect(() => {
    document.title = "Xe lướt miền Trung | Gửi xác nhận đặt cọc";
  }, []);
  const location = useLocation();
  const productInfo = location.state && location.state.productData;

  return (
    <main className="sent">
      <div className="sent__container">
        <figure>
          <img src={SentIcon} alt="" className="sent__img" />
        </figure>
        <div className="sent__content">
          <h1 className="sent__heading">Cám ơn {productInfo.name} !</h1>
          <p className="sent__title">
            Thông tin đặt của bạn đã được gửi, cửa hàng sẽ gửi phản hồi đến
            trang thông tin cá nhân của khách hàng.
          </p>
          <a
            href="/"
            className="sent__content--btn btn btn--primary btn--rounded"
          >
            Trở về trang chủ
          </a>
        </div>
      </div>
    </main>
  );
}
export default Sent;
