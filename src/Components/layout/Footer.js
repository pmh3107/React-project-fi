import React, { useState } from "react";
import "../../css/style.css";
import LogoLink from "../commons/Logo";
import ButtonPrimary from "../commons/Button";
import SocialLink from "../commons/SocialLink";

function BottomFooter() {
  return (
    <div className="footer__bottom">
      <p className="footer__copyright">Copyright © 2023 Design by Hien Phan.</p>
      <div className="footer__socials">
        <SocialLink />
      </div>
    </div>
  );
}
function ColumInfo(props) {
  return (
    <div className="footer__col">
      <h3 className="footer__heading">{props.title}</h3>
      <ul className="footer__list">
        {props.product.map((product, index) => (
          <li key={index}>
            {product.infomation && (
              <p className="footer__label">{product.infomation}</p>
            )}
            {product.link && product.name ? (
              <a href={product.link} className="footer__link">
                {product.name}
              </a>
            ) : null}
            {product.text && <p className="footer__text">{product.text}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
function SendEmail() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email: " + email + " đã được ghi nhận!");
    console.log("Đã gửi enail:", email);
  };
  return (
    <>
      <form action="" className="footer__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="footer__input"
          placeholder="Địa chỉ Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <ButtonPrimary name="Gửi" />
      </form>
    </>
  );
}
function ColumnFirst() {
  const describe = [
    "Xe lướt miền Trung cùng đội ngũ nhân viên tận tình thân thiết xin hânhạnh được hỗ trợ và phục vụ quý khách hàng trên mọi miền tổ quốc.",
  ];
  return (
    <div className="footer__col">
      {/* Logo */}
      <LogoLink className="footer__logo" />
      <p className="footer__desc">{describe}</p>
      <p className="footer__help-text">Đăng ký để nhận tin tức mới:</p>
      <SendEmail />
    </div>
  );
}
function Footer() {
  const nameBranch = [
    {
      title: "Sản phẩm",
      product: [
        {
          name: "Toyota",
          link: "#!",
        },
        {
          name: "Mazda",
          link: "#!",
        },
        {
          name: "Suzuki",
          link: "#!",
        },
        {
          name: "Honda",
          link: "#!",
        },
        {
          name: "Ford",
          link: "#!",
        },
      ],
    },
  ];
  const nameContact = [
    {
      title: "Liên hệ",
      product: [
        {
          name: "Vị trí cửa hàng",
          link: "#!",
        },
        {
          name: "Đăng kí hỗ trợ",
          link: "#!",
        },
      ],
    },
  ];
  const nameInfo = [
    {
      title: "Thông tin",
      product: [
        {
          infomation: "Email",
          link: "mailto:xeluotmientrung@gmail.com",
          name: "xeluotmientrung@gmail.com",
        },
        {
          infomation: "Hotline",
          link: "tel:0917979799",
          name: "0917979799",
        },
        {
          infomation: "Địa chỉ",
          text: "Số 3, Tên lửa, Phường 9, Quận Tân Bình, TP.Hồ Chí Minh",
        },
        {
          infomation: "Giờ mở cửa",
          text: "T2 - T7: 08:00am - 06:00pm",
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          {/* Footer column 1 */}
          <ColumnFirst />
          {/* Footer column 2 */}
          {nameBranch.map((product, index) => (
            <ColumInfo
              key={index}
              title={product.title}
              product={product.product}
            />
          ))}
          {/* Footer column 3 */}
          {nameContact.map((product, index) => (
            <ColumInfo
              key={index}
              title={product.title}
              product={product.product}
            />
          ))}
          {/* Footer column 4 */}
          {nameInfo.map((product, index) => (
            <ColumInfo
              key={index}
              title={product.title}
              product={product.product}
              infomation={product.product}
            />
          ))}
        </div>
        <BottomFooter />
      </div>
    </footer>
  );
}
export default Footer;
