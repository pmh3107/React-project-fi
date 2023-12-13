import React, { useEffect, useState } from "react";
import LogoPrimary from "./commons/Logo";
import IconBackground from "./assets/authImg/forgot-password.png";
import IconError from "./assets/icon/form-error.svg";
import EmailIcon from "./assets/icon/message.svg";

function FormSignIn() {
  useEffect(() => {
    document.title = "Xe lướt miền Trung | Quên mật khẩu";
  }, []);
  const [email, setEmail] = useState("");
  const [emailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đã gửi mail đặt lại mật khẩu vào email: " + email);
    console.log("Đã gửi email:", email);
  };
  return (
    <form action="./" className="form auth__form">
      <div className="form__group">
        <div className="form__text-input">
          <input
            type="email"
            name="Email"
            id=""
            placeholder="Nhập Email"
            className="form__input"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <img src={EmailIcon} alt="" className="form__input-icon" />
          <img src={IconError} alt="" className="form__input-icon-error" />
        </div>
        <p className="form__error">Email chưa đúng </p>
      </div>

      <div className="form__group auth__btn-group">
        <button
          class="btn btn--primary auth__btn form__submit-btn"
          onClick={handleSubmit}
          disabled={emailSent}
        >
          Lấy lại mật khẩu
        </button>
      </div>
    </form>
  );
}
function BannerLeft() {
  return (
    <div className="auth__intro d-md-none">
      <img src={IconBackground} alt="" className="auth__intro-img" />
    </div>
  );
}
export default function SignIn() {
  return (
    <>
      <main className="auth">
        <BannerLeft />
        <div className="auth__content">
          <div className="auth__content-inner">
            <LogoPrimary />
            <h1 className="auth__heading">Đặt lại mật khẩu</h1>
            <p className="auth__desc">
              Hãy nhập gmail của bạn để nhận được liên kết đặt lại mật khẩu
            </p>
            <FormSignIn />
            <p className="auth__text">
              <a href="/signIn" className="auth__link auth__text-link">
                Trở về trang đăng nhập
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
