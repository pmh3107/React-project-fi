import React from "react";
import "../../css/style.css";
import Logo from "../assets/logo/logo.png";
// add icon
import Facebook from "../assets/icon/facebook.svg";
import Youtube from "../assets/icon/youtube.svg";
import Twitter from "../assets/icon/twitter.svg";
import Tiktok from "../assets/icon/tiktok.svg";
import Linkedin from "../assets/icon/linkedin.svg";

function Footer() {
  return (
    <div className="container">
      <div className="footer__row">
        {/* Footer column 1 */}
        <div className="footer__col">
          {/* Logo */}
          <a href="./" className="logo footer__logo">
            <img src={Logo} alt="Xe lướt miền Trung" className="logo__img" />
          </a>
          <p className="footer__desc">
            Xe lướt miền Trung cùng đội ngũ nhân viên tận tình thân thiết xin
            hân hạnh được hỗ trợ và phục vụ quý khách hàng trên mọi miền tổ
            quốc.
          </p>
          <p className="footer__help-text">Đăng ký để nhận tin tức mới</p>
          <form action="" className="footer__form">
            <input
              type="text"
              className="footer__input"
              placeholder="Địa chỉ Email"
            />
            <button className="btn btn--primary">Gửi</button>
          </form>
        </div>
        {/* Footer column 2 */}
        <div className="footer__col">
          <h3 className="footer__heading">Sản Phẩm</h3>
          <ul className="footer__list">
            <li>
              <a href="#!" className="footer__link">
                Toyota
              </a>
            </li>
            <li>
              <a href="#!" className="footer__link">
                Mazda
              </a>
            </li>
            <li>
              <a href="#!" className="footer__link">
                Suzuki
              </a>
            </li>
            <li>
              <a href="#!" className="footer__link">
                Honda
              </a>
            </li>
            <li>
              <a href="#!" className="footer__link">
                Ford
              </a>
            </li>
          </ul>
        </div>
        {/* Footer column 3 */}
        <div className="footer__col">
          <h3 className="footer__heading">Liên hệ</h3>
          <ul className="footer__list">
            <li>
              <a href="#!" className="footer__link">
                Vị trí cửa hàng
              </a>
            </li>
            <li>
              <a href="#!" className="footer__link">
                Đăng kí hỗ trợ
              </a>
            </li>
          </ul>
        </div>
        {/* Footer column 5 */}
        <div className="footer__col">
          <h3 className="footer__heading">Thông tin</h3>
          <ul className="footer__list">
            <li>
              <p className="footer__label">Email</p>
              <a href="mailto:contact@grocerymart.com" className="footer__link">
                xeluotmientrung@gmail.com
              </a>
            </li>
            <li>
              <p className="footer__label">Hotline</p>
              <a href="tel:18008888" className="footer__link">
                0917979799
              </a>
            </li>
            <li>
              <p className="footer__label">Địa Chỉ</p>
              <p className="footer__text">
                Số 3, Tên lửa, Phường 9, Quận Tân Bình, TP.Hồ Chí Minh
              </p>
            </li>
            <li>
              <p className="footer__label">Giờ mở cửa</p>
              <p className="footer__text">T2 - T7</p>
              <p className="footer__text">08:00am - 06:00pm</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          Copyright © 2023 Design by Hien Phan.
        </p>
        <div className="footer__socials">
          <a
            href="#!"
            className="footer__social-link footer__social-link--facebook"
          >
            <img src={Facebook} alt="" className="footer__social-icon" />
          </a>
          <a
            href="#!"
            className="footer__social-link footer__social-link--youtube"
          >
            <img src={Youtube} alt="" className="footer__social-icon" />
          </a>
          <a
            href="#!"
            className="footer__social-link footer__social-link--tiktok"
          >
            <img src={Tiktok} alt="" className="footer__social-icon" />
          </a>
          <a
            href="#!"
            className="footer__social-link footer__social-link--twitter"
          >
            <img src={Twitter} alt="" className="footer__social-icon" />
          </a>
          <a
            href="#!"
            className="footer__social-link footer__social-link--linkedin"
          >
            <img src={Linkedin} alt="" className="footer__social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
